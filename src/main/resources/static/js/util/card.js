/*
*  추후 삭제 예정 -> DB or 다른 저장소 에서 Tag 를 불러와서 삽입
* */
let mappingMiniProfileCard = (card) => {
    console.log('mini card::',card)
    let style = card.style;
    let cardData = JSON.parse(card.cardData);
    let koreanName = cardData.name_ko;
    let englishName =cardData.name_en;
    let profileImageURL =cardData.profile_image;
    let greetings =cardData.greetings
    let introduction = cardData.introduction;
    let links = cardData.links;

    // append CSS file
    addCardCss(style);

    /*    let miniCardHtml = `<div class="mini-card-container ${style}">
           <div class="mini-card-name-container">
                <div class="mini-card-korean-name-container">${koreanName}</div>
                <div class="mini-card-english-name-container">${englishName}</div>
                <div class="mini-card-introduce-container">${greetings}</div>
                <div class="mini-card-introduction-container">${introduction}</div>
                <div class="mini-card-links-container">${links}</div>
            </div>`;*/


    let miniCard = `<div class="mini-card-container">`;

    // profile image part
    if(profileImageURL) {
        miniCard += `<div class="profile-image-container"><img src="${profileImageURL}" alt="profile-image"></div>`
    }

    // name part
    if(koreanName||englishName) {
        miniCard += `<div class="mini-card-name-container">`;
        if (koreanName) {
            miniCard += `<div class="mini-card-korean-name-container">${koreanName}</div>`;
        }
        if (englishName) {
            miniCard += `<div class="mini-card-english-name-container">${englishName}</div>`;
        }
        miniCard+=`</div>`;
    }

    // introduction part
    if(greetings||introduction) {
        miniCard += `<div class="mini-card-introduce-container">`;
        if (greetings) {
            miniCard += `<div class="mini-card-greetings-container">${greetings}</div>`
        }
        if (introduction) {
            miniCard += `<div class="mini-card-introduction-container">${introduction}</div>`
        }
        miniCard +=`</div>`;
    }

    // link part
    if(links){
        miniCard += `<div class="mini-card-links-container">`
        links.forEach((linkObj)=>{
            miniCard+=`<div class="card-link">
                            <a href="${linkObj.link}" target="_blank">
                                <ion-icon name="logo-${linkObj.name}"></ion-icon>
                            </a>
                        </div>`;
        })
        //<img src="${linkObj.image}" alt="${linkObj.name}"/>
        miniCard += `</div>`;
    }
    miniCard += `</div>`;

    // return combined miniCard;
    return miniCard;
}

let mappingAboutMeCard = (card) => {

}

let mappingAboutShopCard = (card) => {
    console.log("shop card:",card);
    let style = card.style;
    let cardData = JSON.parse(card.cardData);
    let image = cardData.image;
    let storeName =cardData.store_name;
    let address =cardData.address;
    let introduction = cardData.introduction;
    let businessHours =cardData.business_hours;
    let openingHours = businessHours.opening_hours;
    let holiday = businessHours.holiday;
    let breakTime = businessHours.break_time;
    let lastOrder = businessHours.last_order;
    let qna = cardData.qna;
    let menuImage =cardData.menu_image;
    let parkingSpace = cardData.parking_space;

    addCardCss(style);

    let aboutShopCard =
        `<div class="about-shop-card-container">`;

    if(image){
        aboutShopCard+=`<div class="about-shop-image-container">
                        <img class="about-shop-image" src="${image}" alt="${storeName}"/>
                        </div>`;
    }

    if(address||storeName||introduction){
        aboutShopCard+=`<div class="about-shop-introduce-container">`;
        if (address) aboutShopCard += `<div class="about-shop-adress-container">주소 : ${address}</div>`;
        if (storeName) aboutShopCard += `<div class="about-shop-store-name-container">가게명 : ${storeName}</div>`;
        if (introduction) aboutShopCard += `<div class="about-shop-introduction-container">소개 : ${introduction}</div>`;
        aboutShopCard+=`</div>`;
    }

    if (openingHours || holiday || breakTime || lastOrder) {
        aboutShopCard+=`<div class="about-shop-business-hours-container">`;
        if (openingHours) aboutShopCard += `<div class="about-shop-opening-hours-container">운영시간 : ${openingHours}</div>`;
        if (holiday) aboutShopCard += `<div class="about-shop-holiday-container">휴무일 : ${holiday}</div>`;
        if (breakTime) aboutShopCard += `<div class="about-shop-breakTime-container">브레이크 타임 : ${breakTime}</div>`;
        if (lastOrder) aboutShopCard += `<div class="about-shop-lastOrder-container">라스트 오더 : ${lastOrder}</div>`;
        aboutShopCard+=`</div>`;
    }
    if(image){
        aboutShopCard+=`<div>`;
        aboutShopCard+=`</div>`;
    }
    if(image){
        aboutShopCard+=`<div>`;
        aboutShopCard+=`</div>`;
    }
    if(image){
        aboutShopCard+=`<div>`;
        aboutShopCard+=`</div>`;
    }

    aboutShopCard+=`</div>`;
    return aboutShopCard;
}

let mappingCareerCard = (card) => {
    let style = card.style;
    let cardData = JSON.parse(card.cardData);
    let links = cardData.links;
    let videoLinks = cardData.video_links;
    let audioLinks = cardData.audio_links;
    let snsLinks = cardData.sns_links;

    addCardCss(style);
}

let mappingLinkCard = (card) => {
    let style = card.style;
    let cardData = JSON.parse(card.cardData);
    let links = cardData.links;
    let videoLinks = cardData.video_links;
    let audioLinks = cardData.audio_links;
    let snsLinks = cardData.sns_links;

    addCardCss(style);

    let linkCard = `<div class="link-card-container">`;

    // links part
    if (links) {
        linkCard += `<div class="link-card-links-container">`
        links.forEach((linkObj)=>{
            linkCard+=`<div class="link">
                            <a href="${linkObj.link}" target="_blank">${linkObj.name}</a>
                        </div>`;
        })
        linkCard += `</div>`;
    }

    // contents links part
    if (videoLinks||audioLinks) {
        linkCard += `<div class="link-card-contents-links-container">`
        if (videoLinks) {
            videoLinks.forEach((linkObj) => {
                // videoLinks의 이미지는 동영상 썸네일 가져올 예정 (유튜브 API 사용 필요)
                linkCard += `<div class="link-card-video-links-container">
                            <a href="${linkObj.video_link}" target="_blank">
                                <img src="${linkObj.image}" alt="${linkObj.name}"/>
                            </a>
                        </div>`;
            });
        }
        if (audioLinks) {
            audioLinks.forEach((linkObj) => {
                // audioLinks의 이미지도 가능하면 앨범 커버 등 가져오면 좋을 것 같음
                linkCard += `<div class="link-card-audio-links-container">
                            <a href="${linkObj.audio_link}" target="_blank">
                                <img src="${linkObj.image}" alt="${linkObj.name}"/>
                            </a>
                        </div>`;
            });
        }
        linkCard += `</div>`;
    }

    // sns links part
    if (snsLinks) {
        linkCard += `<div class="link-card-sns-links-container">`
        snsLinks.forEach((linkObj)=>{
            linkCard+=`<div class="snsLink">
                            <a href="${linkObj.sns_link}" target="_blank">
                                <img src="${linkObj.image}" alt="${linkObj.name}"/>
                            </a>
                        </div>`;
        })
        linkCard += `</div>`;
    }
    linkCard += `</div>`;

    // return combined linkCard;
    return linkCard;
}


/*
 * {
 * "address": "서울특별시 서초구 매헌로8길 47",
 * "enable_map" : "true",
 * "enable_share": "true"
 * }
 * */
let mappingMapCard = (card) => {

    let style = card.style;
    let cardData = JSON.parse(card.cardData);
    let address = cardData.address;
    let enable_map = cardData.enable_map;
    let enable_share = cardData.enable_share;

    console.log("map card")
    addCardCss(style);

    let mapCard = `<div class="map-card-container">`;

    if (address) {
        console.log("add address", address)
        mapCard += `<div class="map-card-address-container">`
        mapCard += `<div>${address}</div>`;
        mapCard += `</div>`;
    }

    if (enable_map) {
        console.log("add map", enable_map)
        mapCard += `<div class="map-card-map-container">`

        mapCard += `<div id="map" style="width:500px;height:400px;"></div>`;
        mapCard += `</div>`;
    }

    if (enable_share) {
        console.log("add share")
        mapCard += `<div class="map-card-share-container">`
        mapCard += `<div>share</div>`;
        mapCard += `</div>`;
    }

    return mapCard;


}

function cardTest(){
    console.log("card!")
}

function addCardCss(style){
    let cssUrl = "/css/card/"+style+".css";
    let head = document.getElementsByTagName("head")[0];
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    document.head.appendChild(link);
}

export {mappingMiniProfileCard, mappingAboutMeCard, mappingAboutShopCard, mappingCareerCard, mappingLinkCard, mappingMapCard, cardHandle, cardTest}
