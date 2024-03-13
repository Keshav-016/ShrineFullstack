import { navbarContent , footerContent } from './component/reusable.js';
import data from './helper/data.js';
import { createMemberCard, createEventCard, createArticleCard } from './helper/helper.js';

const memberCardContainer = document.querySelector('.memberCardContainer');
const eventCardContainer = document.querySelector('.eventCardContainer');
const articleCardContainer = document.querySelector('.articleCardContainer');
const navbar = document.querySelector('.navbarSection');
const footer = document.querySelector('.footer')
const heading = document.querySelectorAll('.sectionHeading');
const subHeading = document.querySelectorAll('.subHeading')
const eventLeftButton = document.querySelector('.eventLeftButton');
const eventRightButton = document.querySelector('.eventRightButton');
const eventCard = document.getElementsByClassName('eventCard');

let members, event, article;
let index = 0;

navbar.innerHTML = navbarContent();
footer.innerHTML = footerContent();


function fetchData() {
    data.forEach((item) => {
        const { memberCardData, eventCardData, articleCardData } = item
        if (memberCardData) {
            members = memberCardData;
        }
        else if (eventCardData) {
            event = eventCardData;
        }
        else if (articleCardData) {
            article = articleCardData;
        }
    })
}
fetchData();

for (let i = 0; i < data.length; i++) {
    heading[i].innerText = data[i].heading;
    subHeading[i].innerText = data[i].subHeading;
}

members.forEach((item) => {
    createMemberCard(memberCardContainer, item);
})

event.forEach((item) => {
    createEventCard(eventCardContainer, item);
})

article.forEach((item) => {
    createArticleCard(articleCardContainer, item);
})

function moveLeft() {
    index = (index + 1) % event.length;
    for (let i = 0; i < event.length; i++) {
        eventCard[i].style.transform=`translateX(-${index*100}%)`
    }
}

function moveRight() {
    index = (event.length-(index + 1) );
    for (let i = 0; i < event.length; i++) {
        eventCard[i].style.transform=`translateX(-${index*100}%)`
    }
}

eventLeftButton.addEventListener('click', () => {
    moveLeft();
})

eventRightButton.addEventListener('click' , ()=>{
    moveRight();
})

