import {getCardsInfoByUserId,getTemplateInfoByUserId,appendCard,addTemplateCss} from "/js/util/common.js";
import {cardHandle} from "/js/util/card.js";

console.log('userId:',userId);
let cardList = await getCardsInfoByUserId(userId); //유저가 소유한 카드들의 정보 받아오기
let template = await getTemplateInfoByUserId(userId); // 유저의 템플릿 정보 받아오기

addTemplateCss(template.design);
if(cardList)document.querySelector("body").innerHTML=`<div id="card-list"></div>`;

// //유저가 소유한 카드만큼 append
cardList.forEach((card)=>{
    console.log('for each >>')
    appendCard(card);
});

addMap();

function addMap(){

    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    console.log("loading map")
    var map = new kakao.maps.Map(container, options);
}
// cardHandle(cardList);

// console.log('add textContent >> ')
// document.getElementsByClassName("mini-card-korean-name-container").textContent += " This is the text from javascript.";
// if(document.getElementsByClassName("mini-card-english-name-container")[0].textContent=null){
//     document.getElementsByClassName("mini-card-english-name-container")[0].style.display = "none";
// }
// console.log('end textContent ')


// document.getElementByClass("map").style.display = "none";
