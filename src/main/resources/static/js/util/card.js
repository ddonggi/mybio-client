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

const jsonString_Test_All = `
        {"cardList":
            [
                {"showOrder":1,"type":"card-miniprofile","style":"mini_01",
                    "cardData":
                        {
                            "koname":"김도현~",
                            "enname":"dhkim",
                            "img":"http://img",
                            "hello":"안녕",
                            "intro":"안녕하세요. 도현입니다.",
                            "link":"http://o2o.kr"
                        }
                },
                {
                    "showOrder":2,"type":"card-aboutme","style":"about_me_01",
                    "cardData":
                        {
                            "koname":"dglee",
                            "img":"https://banana.o2o.kr/img/nps/3.PNG",

                            "namecard_company":"o2o",
                            "namecard_department":"dev2",
                            "namecard_position":"sw engineer",
                            "namecard_address_1":"서울 서초구 매헌로8길 47 (양재동, 희경재단 2-3) AI 양",
                            "namecard_address_2":"AI 양",
                            "mobile":"010-1234-5678",
                            "email":"dglee@o2o.kr"
                        }
                },
                {
                    "showOrder":3, "type":"card-map", "style":"map_01",
                    "cardData":
                        {
                            "address":"서울 서초구 매헌로8길 47 (양재동, 희경재단 2-3) AI 양",
                            "show_map":"True",
                            "use_share":"True"
                        }
                },
                {
                    "showOrder":2,"type":"card-career","style":"aboutme_01",
                    "cardData":
                        {
                            "intro":"hi hello",
                            "intro_detail":"hi hello how r u?"

                        }
                },
                {
                    "showOrder":4, "type":"card-link", "style":"link_01",
                    "cardData":
                        {
                            "link":"http://o2o.kr",
                            "link":"http://o2o.kr"
                        }
                }
            ]
        }
            `;

function cardHandle(cardArray){
    console.log('cardArray:',cardArray);
    console.log("cardHandle")

    let miniCardHtml =
        ` <img src="hi5_mini_img" alt="배경 이미지" width="200px">
         <div class="data">
             <div class="name">>
                 <div>
                     <div class="name-korean">hi5_mini_koname</div>
                 </div>
                 <div class="name-english">hi5_mini_enname</div>
             </div>
             <div class="short self-introduction">hi5_mini_intro</div>
             <ul class="links">
                 <li class="link_1">
                     <a href="https://www.instagram.com/barackobama/" class="link-instagram">
                         <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/instagram_icon_138461.png" width="50px" alt="instagram">
                     </a>
                 </li>
                 <li class="link_2">
                     <a href="https://www.linkedin.com/in/williamhgates/" class="link-linkedin">
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////u7u5AcbHt7e1AcLFAcLDy8vLv7+/39/f09PT+/v75+fk5bK8uZ60yaa3S2eN6l8Kuvta3xdmDn8m6yeDi6fK+zN+NpsxqjL1xk8MoZKvp7vWAnMe0xNva4evEzt1KeLWbr872+Pvi5enW3+1ehLlQe7anuNKPqc6gs8/d5PDG0+bL1ODm7PSXrc1ZgbkkmIf0AAAO0UlEQVR4nO2dDUPiOBCG25KmLSQBRAWqIoIreq7r//93l49+0abJlA1rq+Ru3TmIXF+SzDOZTMHzRJuMfN4SYY6lGcmHI2GOxsJMpDkZXmffuyjs4UVfFP44hRPRkpFoWNrS9KXpS1uaWJrJADt7I/WXaOoRKT+WZqzeIPlKsscQO3tyJLPe5RSIxbir3mo2ZC89wM4Xhb286NMVjgo3VOktHdWo+dJD6ewlomHVpB0JK6qblR4D66xkylEdJeUbVGWLeiNGxWwYVuefQPyLwh5edEeFY9FU2JPI/5BmJEwvUgGDMFWMNBlg5ywCGvMwbhxlv85N9WQiTPVKkewxwM6TJvG1bGlD7QA6/7CYZigX/ZcKBzDxus3SSDQ/Fk2aUSJMLE0szEQ9LHv4A+ysZOaeV75ByvNK9crdipa56QF2zhWKUR0KxC8xzU9V+NWr5Yzr8Pv7UjmSX0+tS9R2idq6KAROj0RM+0HMUulvOmzM/AiP757fr+cPj1Pege9E+74/7LbH97zd7WJLKOONkmD1tsdR3/f4XjlvAfTc/UGUIBTIFoaEsfVjjLWd+0Z8SG88ek1ZyFuQ/+AqSbrafBeFyeOWhQHi//B/CyMICDkMRKE5f+zHbyybndUWij90Vus8Or6Or815Q88t4iVVQyZbRSviItlnFPf23MIvNZvOceInioJALb+gNEIUIt5C8qne2D6ePVUVlpO8Hh8kB6oci2qFgbKJGpB1ZXH0PKbR9cbTNMy1BFWjtOjbkBVG/qfGyahViBQ1gpDd9FThqAR/a10DfqMtAitOh6y8ftZiQOppcIiCI9CXxA/C7LkgTB+jXtbTeOWottJzThugrxAfZSOJVrjnxG/vvW1bhRnxM4NuomEq9G7SBuhrxFcGecIDVXhgddA3iC//kF9JHxXaPc14TeqgbxJfTdR9Hz0NwPO+oEJC3Th6CNH/vFN9+vk624k/3uv2FMUqzIkvDPbu9ZD4doUbA+6PvQ+bD1PhlDZAryV+iNih7wr1O5Ep1YBeQ/wgV9iz3ZN1B4z3pllaJX7ADkkPd8BeMaotGQF/RwqHaSZ+yK7U7/Uri1EqbKXnC4IRH7Fp1EPi2xV6Mzjx/WEqnLPKojs2jh7qadRmz+pXIm8NDblblTlw/oO94T5m9VUEZDzlSF5ag5owyFL8nB0h/ejlyYxf+p62kyo8Z2LlBXL51QyBexm5oYCs+3m61lDYjA+i0TafiBnaC4ObSAEDofS5n5kogEIfH5je0YQ5G7lGmYkahELdiEe/itCsDnw5oGKekrt/NvG6zVJQtQnesDDQNiSiAfGDHsY9rTbx1KgqzyvfIOV5pfpyp/lAwzL+LI0wH012n/hF535VDHnlvDXRc/JEpZzMe+aG8DSisdUQzg/NvbE8fNJPVC5wPHyF4viJaIgvhjJd/NOLPlvlXjJ9YTriE3Ld7Nyjddihcm8yeQpYnfiE3u+T71O5h/dPhJJiR8zlpYv/sr1ob2uiGgqNwUSE8ePyF0lFyRClL7PrnaFzp1c+W+fulXsYe7uP5/er2+k+y/UMTSG0ck8shW9ZuTe0zl0r9wbYWQ3kl3O5FzFNfy76eyhUkcg/rdwbHb/0eTqLHD2++/jv+fn58fH3dP9PK/f4s/EkFs5J/qj+5I/rDgySls7yeLZxFMEfx9P5chXQNKWiMfEDrV7nmxF//fNX7nG2fDytV7KtRauY68Uj1hz6XN3rOktj3ugc7eergDEeEYbVyDdEhLHt+vrOO/lUCx7TPKSM8K2g/MObNKTFG137fj2YmKVE9CbZryg7+yX6eXfc+XbFGGpJlPDdC2XrWz4yZ43a4uvUuMdfJ7WXXrDsKRRoDPJS6Tw+ICoPf8RBT6A3CA0OI3xOhVF71ZBMtqW/j6sv71hY5uE0RvqedY7i2y3VZGKbBtte4eQEhaMS/Ia6hug306oL83QpWY6LzmIBvNP8wkKtQV5VZ7xfUTG4MiEZmA1EV6MO19ylco9HerfUnNUn90nReYJH0ZyFlYR/0yALLDp7j2K3CRpCWTTProQk95V7whVQc1afLOIqavGcVRP+TYMsEjHP5gzV8pNmI2R/kug8MY1QaMrqNxXqZ2duKIVvaXh0Pmc3QrpM/LMpNGX1NWNocjRSYfKUZi+GQrjB7vF5FOo9TZHV14xhkfDXGVxhcqB5vQp0HSqf+gq85k6fuTcuZmlLVr/paTQjXjH4O/KYGqrJTC29Hjuu3BO0uGKBifiIzI5pcU11oC8N8rqTELCAXm+wadSBFjDi46uWWZrNn1xhgdprql9/uUFeZ6Tj7CwN8ulHrmOaNoUl8RsK8+vR+9RwywWGINBrDM6MMyi0EL+u0EJ8WYsTNocHZqB0Ezms3CvG0Ej8fB36attybSG+MqCgbxhkht1V7kkzFgqNxL+Pq1vP5MFC/Mo71Yn4mRHSaQLdAZdsMWYE7MRPys7JyEp8aRTvUBfiZ5H72oNmMUqF/5T4yjh1HfIfbBO5j9qMxNdE3o0R186BExtZJs4Vmomv3Vu0E1/9fSLxpcGiCKYQmNW/bS8UVsRfJNV0ejRnhvV3bBjmoslgVxEsq6+iNtspR2Qn/qR6JCJoYXelJxNfEvjeGzv8zD0o8cdw4qO/IL5KNO7M13xC1AYgfiWmOSvxxQ/6bL7mExQaid+IS89KfGGQPycqbI/ajMSvz1IKcDTFOxQSpjL5jKgnIOhHn7BZCqs2ad09FcSfxdUyj8lDB+IjFqwPt9P9fvP74fWTEKiXJXcuK/fsxK+cuKqoDUh8RD+vuAeUlxHxMHP6R1N7pW3sMXJYuXc24pPgKsHVBGE02S0oCP3kCbvOtbVN1ECXTYQRn61GuPAVxWXcgvL8ZJacX2FJfG02MbARn8282G8q9N4pBP3bLgrt69BC/MY6hBBflPfri/FuKQD9KWgddvClZuLXfSmA+Gjr45ZivGRBAiv66WbirHIPSvxxF+Ij+hu3HXr6E2ZP+POoxm3UBiD+pAvx1Rav5dBTfJCDDf30+vzZxArxG1Gbjfgh2UftCsc7+zpkb46jNiPxG3sLK/HJa+IbFHqvVvCTpbvKPUBWv7E/tBA/TO/8YhenK8Z7psiy2SezLKvvonKvhYfF2uq+xyerxFiM58u7rZTXbTHIr8hd5V5Lrk2hTUv84qkWgz1YbqlNZkR2lXfi6o1PpzENKsasYpR+sRm1mQeR+xnLLbXifjKzswm3I6dRW3YDPqoZmdvQx6W6dyULKq231Mr6D6MvDYNuCm05b/0gZnFiM+cd5k/pDfIHW4rxor28EQmpia0z+DxwVrkXt/BQpcvEUUnj3EI5gzD3CnWD3ia2YryYZY43RHoDsZGzyr3W88MQqdvWm2dPxVN6I72zfxDECzriS9Ogu8R+9gSOaST8gmyOFEYB32auzdjC7dh+g8EKNZf9kUHvkvZrdhSXKteoyyai/CmtQX4BbqG4J2IRBPnyaxihY4UtnkZdt+Yc34hrHo7YFS6JeQhR+gFQOCrBb6nFaFmHKnZr1mIUT2kNHlLaPxjpD8n4nq3dhkE/kvZr7ly5ZyF+o57GTPyscs/44Vb4lVi2F3SauKzcc0p8WddmKb/nCs3E5wpjwzWfENNo12FO/OYZsIn4QIVm4iOnCm3E18SlJuJDFCavxEx812PY4mky4uv2FgbigxQuiY34EIXwGmEz8ZuVe8YG8jRcoYX4EE/ThRZ24pe0sBEfQoulhfgovQHQ4quIv3RC/BvHUZt2HR4Rv5prsxIfoNBCfLcKLcTXjaGJ+DCFFuJ3VmjePZmJX989UQvxl55997S0EV+sw9Zr7l65ZyZ+s3LPQvzYejtavLQSf+Owcs9K/HoWw0Z8bL2lEC+AxHdTufcVxF84IT5YoYX4uhNSQ4MqtBHfcdRmIr42LjUQH6bQQnyQQmhW30b8ZlbfTHwRtVlusefr0EJ8HrWdvXKvJH79ZMZKfOvHJECIDziZaRC/jYcg4lfOgO3Et37UBZj4js6AIcSv31Gie1cK4oPiUhvxu8U0NoXadZgRX3MGbCQ+MC41E/80hZ1y3iXxNbPUSHzgLDUTHzRL/65yr5LVb1TumYm/HFs/+mls3+NvsMPKPRvxG5V7xiZpkXWW3lBzGRhKfFeVe0MlPlShlfiaM2Aj8UEKrcQ/ezaxJH7rOX4L8YFjaMnqd1BoX4cW4jfWoYX40HVoJD5oHcJ9qYX4dV9qIz7Il1qID/KlcB5CiD/uQnwAD4HEd1a512x14k+6EB+SiYIR/7zZxJz4jbtkLcSHKjQR323UBjrHr1buGRt4b2HEBWiWdtkfmojf2B9aiA/cH1qID9kffv89vlfO2+9NfKtCx5V74FwbhPi9rNwDx6Vm4ndT+E8r94A5b9g5fi8r94DnFhbi02l/K/eAZ0924tvPnsAxjdvKPfD5IYj4vazcg+fazOf4LhWaid/fc/xRCf7eVe5BzvHbr3kIlXsA4g+7cs858XtXuZdAiT/cyj3oOf5wK/fcnOO7qtxbnKFyD5DVd1a5529IaCQ+O0yO3PQzDY3EZwcALeRiNtXqs52zz9zz43tiJD6roXb8QkzEFzeU2Il/x5BxCMX9h65iGh/vtrovtVIQDwl9xLWXfk5RO/FRevAACr15igzEJ2zn9Bs8xkukPkqc8r+yTxUXBjfZaoobL33zi+UdjjqL9nJbvw69wvHVy9HvHZlstnP4mXtyTu8+prLdiLapmHscabYt0V7bmRub7PptuycvjnzefyN/sfL/VuYOcs0etHIvyZ6XhwLqAWmqjat+64kTbWf5YIcvwI3j7H8izybU66mXA10zuHKvT1+A2/GbA0qFvfr2B2edLwp7edEdFX7/b9JR4dJXf2fRF39brnjYcAbW887dv5VsaJ1/osIBTLxusxRWbdKvL208y7fl9uqLNzt1zhWKUR0KxC8xzU9V+NWr5Yzr8Pv7UjmSX0+tS9R2idq6KBzAxOs2S6W/+fJd3OXbcv+isxrIL+fyJaa5KIQpHEwau2POu8u5Rbevqe1J5y5nTx2/prYnnX9iTDOAi74o/GEK/wc679S2W5/72gAAAABJRU5ErkJggg==" width="50px" alt="linkedin">
                     </a>
                 </li>
             </ul>
         </div>`;
//이 쪽은 안 써도 됨
    let linkCardHtml = "<div><div class='name-korean'>김도현 링크</div></div>";
    let aboutCardHtml = "<div><div class='name-korean'>김도현 어바웃미</div></div>";

    let mapCardHtml = `<div class='map-address'>{{address}}</div>
                     <div class='map'>test</div>
                     <div class='map-share'></div>
                 `;


    // const cardObj = JSON.parse(jsonString2);
    // const cardObj = JSON.parse(jsonString_Test_All);

    // console.log("cardObj:",cardObj)
    // console.log('cardlist:',cardObj.cardList)
    // const cardArray = cardObj.cardList;



    for(var i =0; i<cardArray.length; i++){
        console.log(cardArray[i].type)

        if (cardArray[i].type == "card-miniprofile"){

            miniCardHtml = miniCardHtml.replace("hi5_mini_koname",cardArray[i].cardData.koname);
            miniCardHtml = miniCardHtml.replace("hi5_mini_enname",cardArray[i].cardData.enname);
            miniCardHtml = miniCardHtml.replace("hi5_mini_intro",cardArray[i].cardData.intro);
            miniCardHtml = miniCardHtml.replace("hi5_mini_img",cardArray[i].cardData.img);
            console.log(miniCardHtml)
            document.getElementById("card-miniprofile-area").innerHTML=miniCardHtml;
        }
        else if (cardArray[i].type == "card-aboutme"){
            document.getElementById("card-aboutme-area").innerHTML=aboutCardHtml;

        }
        else if (cardArray[i].type == "card-aboutshop"){

        }
        else if (cardArray[i].type == "card-career"){

        }
        else if (cardArray[i].type == "card-map"){


            // "address":"서울 서초구 매헌로8길 47 (양재동, 희경재단 2-3) AI 양",
            //                 "use_address":"True",
            //                 "use_share":"True"


            //if (cardArray[i].cardData.address != null)
            {
                cardHtml = mapCardHtml.replace("{{address}}",cardArray[i].cardData.address);

                //if (cardArray[i].cardData.show_map == False)
                //cardHtml = mapCardHtml.replace("mapdress",cardArray[i].cardData.address);
                //    find class(map).show = None


                // cardHtml = cardHtml.replace("map",cardArray[i].cardData.enname);
                // cardHtml = cardHtml.replace("map-share",cardArray[i].cardData.intro);
                console.log(cardHtml)
                document.getElementById("card-map-area").innerHTML=cardHtml;

                // document.getElementByClass("card-map-area").style.display = "none";
                // document.getElementByClass("map").style.visibility = "hidden";


            }

        }
        else if (cardArray[i].type == "card-link"){
            document.getElementById("card-link-area").innerHTML=linkCardHtml;
            document.getElementById("card-link-area").innerHTML+=cardArray[i].cardData.name;
        }
        else
        {
            ;
        }

    }

    document.getElementById("card-link-area").style.display = "none";
    document.getElementById("card-link-area").style.visibility = "hidden";
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
