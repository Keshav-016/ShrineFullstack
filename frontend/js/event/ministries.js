import {fetchData} from '../helper/fetch.js'
import { eventUrl } from '../helper/url.js';

const ministryCardContainer = document.querySelector('.ministryCardContainer');
const baseUrl = 'http://127.0.0.1:3000/assets';

function createMinistryCard(item) {
    const card = document.createElement('div');
    card.setAttribute('class' , 'd-flex flex-column align-items-center ministryCard p-4')

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src' , `${baseUrl}${item.imageUrl}`);
    image.setAttribute('alt' , item.alternate);
    image.setAttribute('class' , 'w-75 ps-4')
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    const cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class' , 'my-3 cardHeading');
    cardTitle.innerText=item.title;
    card.appendChild(cardTitle);
    
    const content = document.createElement('p');
    content.setAttribute('class' , 'content text-center')
    content.innerText=item.content;
    card.appendChild(content);

    const linkContainer = document.createElement('a');
    linkContainer.setAttribute('class' , 'position-relative text-decoration-none');
    linkContainer.setAttribute('href' , '#');

    const learnMore = document.createElement('span');
    learnMore.setAttribute('class' , 'learnMore')
    learnMore.innerText = 'LEARN MORE'
    linkContainer.appendChild(learnMore);


    const backgroundCircle = document.createElement('span');
    backgroundCircle.setAttribute('class' , 'circle')
    linkContainer.appendChild(backgroundCircle);


    const arrow = document.createElement('img');
    arrow.setAttribute('src' , `${baseUrl}/event/ministries/arrow.svg`)
    arrow.setAttribute('class' , 'position-absolute arrow');
    arrow.setAttribute('alt' , 'arrow');
    linkContainer.appendChild(arrow);
    card.appendChild(linkContainer);

    ministryCardContainer.appendChild(card);
}

const data = await fetchData(eventUrl.ministryUrl);

data.forEach((item)=>{
    createMinistryCard(item);
})