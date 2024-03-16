import { fetchData } from "../helper/fetch.js";
import { questionUrl } from "../helper/url.js";

const heroCarouselWrapper = document.querySelector('.heroCarouselWrapper');
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

    heroCarouselWrapper.appendChild(card);
}

function insertData(data) {
    data.forEach((item) => {
        createHeroCard(item);
    })
}

const data = await fetchData(questionUrl.heroUrl);
insertData(data);


function moveRight() {
    index = (index + 1) % data.length;
    heroCarouselWrapper.style.transform = `translateX(-${index * 100}%)`
}

function moveLeft() {
    const move = data.length - 1 - (index) % data.length;
    index++;
    heroCarouselWrapper.style.transform = `translateX(-${move * 100}%)`

}

heroLeftButton.addEventListener('click', () => {
    moveLeft();
})

heroRightButton.addEventListener('click', () => {
    moveRight();
})