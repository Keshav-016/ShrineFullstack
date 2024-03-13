import navbar from './component/navbar.js';
import footer from './component/footer.js';
import { createMemberCard, createEventCard, createArticleCard } from './helper/helper.js';

const memberCardContainer = document.querySelector('.memberCardContainer');
const eventCardContainer = document.querySelector('.eventCardContainer');
const articleCardContainer = document.querySelector('.articleCardContainer');
const navbarContainer = document.querySelector('.navbarSection');
const footerContainer = document.querySelector('.footer')
const eventLeftButton = document.querySelector('.eventLeftButton');
const eventRightButton = document.querySelector('.eventRightButton');
const eventCard = document.getElementsByClassName('eventCard');

let members, events, articles;
let index = 0;

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();



async function fetchData() {
    const membersFetchedData = await fetch('http://127.0.0.1:3000/home/member');
    const memberJsonData = await membersFetchedData.json();
    members = memberJsonData.memberCardData;
    members.forEach((item) => {
        createMemberCard(memberCardContainer, item);
    })

    const eventsFetchedData = await fetch('http://127.0.0.1:3000/home/event');
    const eventJsonData = await eventsFetchedData.json();
    events = eventJsonData.eventCardData;
    events.forEach((item) => {
        createEventCard(eventCardContainer, item);
    })

    const articlesFetchedData = await fetch('http://127.0.0.1:3000/home/article');
    const articleJsonData = await articlesFetchedData.json();
    articles = articleJsonData.articleCardData;
    articles.forEach((item) => {
        createArticleCard(articleCardContainer, item);
    })


}
fetchData();


function moveLeft() {
    index = (index + 1) % events.length;
    for (let i = 0; i < events.length; i++) {
        eventCard[i].style.transform = `translateX(-${index * 100}%)`
    }
}

function moveRight() {
    index = (events.length - (index + 1));
    for (let i = 0; i < events.length; i++) {
        eventCard[i].style.transform = `translateX(-${index * 100}%)`
    }
}

eventLeftButton.addEventListener('click', () => {
    moveLeft();
})

eventRightButton.addEventListener('click', () => {
    moveRight();
})

