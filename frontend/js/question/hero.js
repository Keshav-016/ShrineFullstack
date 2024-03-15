import { fetchData } from "../helper/fetch.js";

const heroCarouselContainer = document.querySelector('.heroCarouselContainer');
const heroLeftButton = document.querySelector('.heroLeftButton');
const heroRightButton = document.querySelector('.heroRightButton ');


let index = 0;

function createHeroCard(data) {
    const card = document.createElement('div');
    card.setAttribute('class', 'flex-shrink-0 col-12')

    let heroImage = document.createElement('img');
    heroImage.setAttribute('src', data.image)
    heroImage.setAttribute('alt', 'hero');
    heroImage.setAttribute('class', 'w-100')
    card.append(heroImage);

    heroCarouselContainer.appendChild(card);
}

function insertData(data) {
    data.forEach((item) => {
        createHeroCard(item);
    })
}

const data = await fetchData('http://127.0.0.1:3000/question/heroImage');
insertData(data);


function moveLeft() {
    index = (index + 1) % data.length;
    heroCarouselContainer.style.transform = `translateX(-${index * 100}%)`
}

function moveRight() {
    index = (data.length - (index + 1));
    heroCarouselContainer.style.transform = `translateX(-${index * 100}%)`

}

heroLeftButton.addEventListener('click', () => {
    moveLeft();
})

heroRightButton.addEventListener('click', () => {
    moveRight();
})