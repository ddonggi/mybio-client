import {mappingMiniProfileCard,mappingLinkCard,mappingAboutMeCard,mappingAboutShopCard} from "/js/util/card.js";

async function getCardsInfoByUserId(userId) {
    let url = 'http://localhost:8081/card/' + userId;
    // let url = 'https://172.30.1.26:8081/card/' + userId;
    console.log("url:",url);

    let response = await fetch(url);

    if (response.ok) { // HTTP 상태 코드가 200~299일 경우
        // 응답 몬문을 받습니다.
        let json = await response.json();
        console.log('card json:',json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function getTemplateInfoByUserId(userId) {
    let url = 'http://localhost:8081/template/' + userId;
    // let url = 'https://172.30.1.26:8081/template/' + userId;
    console.log("url:",url);

    let response = await fetch(url);

    if (response.ok) { // HTTP 상태 코드가 200~299일 경우
        // 응답 몬문을 받습니다.
        let json = await response.json();
        console.log('template json:',json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

/*async function getMiniCardInfoByCardId(cardId) {
    let url = 'http://localhost:8081/mini-card/' + cardId;
    // let url = 'https://172.30.1.26:8081/mini-card/' + userId;
    console.log("url:",url);

    let response = await fetch(url);

    if (response.ok) { // HTTP 상태 코드가 200~299일 경우
        // 응답 몬문을 받습니다.
        let json = await response.json();
        console.log('json:',json)
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}*/


function appendCard(card) {
    // TODO : card_data : 컬럼이 아닌, mini_card_data 테이블에서 가져오기
    console.log("card type:",card.type)
    if(card.type==='mini_profile'){
        document.getElementById("card-list").innerHTML += mappingMiniProfileCard(card);
    }else if(card.type==='about_me'){

    }else if(card.type==='about_shop'){
        document.getElementById("card-list").innerHTML += mappingAboutShopCard(card);
    }else if(card.type==='career'){

    }else if(card.type==='link'){
        document.getElementById("card-list").innerHTML += mappingLinkCard(card);
    }else if(card.type==='map'){

    }
}

function addTemplateCss(design){
    let cssUrl = "/css/template/"+design+".css";
    let head = document.getElementsByTagName("head")[0];
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    document.head.appendChild(link);
}

export {getCardsInfoByUserId,appendCard,getTemplateInfoByUserId,addTemplateCss};