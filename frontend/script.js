import { createMemberCard, createEventCard, createArticleCard } from './js/home/homeHelper.js';
import { homeUrl } from './js/helper/url.js';

const memberCardContainer = document.querySelector('.memberCardContainer');
const eventCardContainer = document.querySelector('.eventCardContainer');
const articleCardContainer = document.querySelector('.articleCardContainer');
const eventLeftButton = document.querySelector('.eventLeftButton');
const eventRightButton = document.querySelector('.eventRightButton');
const eventCard = document.getElementsByClassName('eventCard');
const churchSubscribeEmail = document.querySelector('.churchSubscribeEmail');
const churchSubscribeButton = document.querySelector('.churchSubscribeButton');

let index = 0;
let events;


function insertData(data, container , cardCreator) {
    data.forEach((item) => {
        cardCreator(container, item);
    })
}


async function fetchData(url) {
    const fetchedData = await fetch(url);
    const jsonData = await fetchedData.json();
    const data = jsonData.cardData;
    if (jsonData.section === 'members') {
        insertData(data, memberCardContainer , createMemberCard)
    }
    else if (jsonData.section === 'event') {
        insertData(data, eventCardContainer , createEventCard)
        events = data;
    }
    else if (jsonData.section === 'article') {
        insertData(data, articleCardContainer , createArticleCard);
    }
}


fetchData(homeUrl.memberUrl);
fetchData(homeUrl.articleUrl);
fetchData(homeUrl.eventUrl);


async function postEmail(url, data) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

churchSubscribeButton.addEventListener('click', () => {
    postEmail("http://localhost:3000/home/subscribe/church", { "email": churchSubscribeEmail.value });
    alert('subscribed successfully');
    churchSubscribeEmail.value = "";
})

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



