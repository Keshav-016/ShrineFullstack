import { fetchData } from '../helper/fetch.js';
import { pastorTeamUrl } from '../helper/url.js';

const baseUrl = 'http://127.0.0.1:3000'
const memberCardContainer = document.querySelector('.memberCardContainer');


function createMemberCard(container, data) {
    const card = document.createElement('div');
    card.setAttribute("class", "border-0 col-12 col-sm-6 col-md-4 mb-3 mb-md-5");

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class' , 'mb-2 mb-sm-4');
    let image = document.createElement('img') ;
    image.setAttribute('src' , `${baseUrl}${data.imgUrl}`);
    image.setAttribute('alt' , `${data.alternateText}`)
    image.setAttribute('class', 'w-100');
    imageContainer.appendChild(image); 
    card.appendChild(imageContainer);  

    const imageData = document.createElement('div');
    imageData.setAttribute('class','d-flex gap-3')

    const shareImageContainer = document.createElement('div');
    shareImageContainer.setAttribute('class', 'd-none d-lg-block');
    const shareImage = document.createElement('img');
    shareImage.setAttribute('src' , `${baseUrl}/assets/home/members/share.png`);
    shareImage.setAttribute('alt' , 'share');
    shareImageContainer.appendChild(shareImage);
    imageData.appendChild(shareImageContainer);

    const imageContentContainer = document.createElement('div');

    const cardHeading = document.createElement('h4');
    cardHeading.setAttribute('class' , 'card-title cardHeading')
    cardHeading.innerText=`${data.title}`
    imageContentContainer.appendChild(cardHeading);

    const imageContent = document.createElement('p');
    imageContent.setAttribute('class' , 'content');
    imageContent.innerText=`${data.content}`;
    imageContentContainer.appendChild(imageContent);
    imageData.appendChild(imageContentContainer);

    card.appendChild(imageData);
  
    container.appendChild(card);

}

const data = await fetchData(pastorTeamUrl.memberUrl);
data.forEach((item)=>{
    createMemberCard( memberCardContainer , item);
})