import { fetchData } from '../helper/fetch.js'
import { videoListingUrl } from '../helper/url.js';

const videoContainer = document.querySelector('.videoContainer');
const baseUrl = 'http://127.0.0.1:3000';

let index = 0;
function createElement(item) {
    const videoCard = document.createElement('div');
    index!==3 && videoCard.setAttribute('class', 'col-12 col-sm-4 p-4  ')
    index===3 && videoCard.setAttribute('class', 'col-12 col-sm-8 p-4 ')
    

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', `${baseUrl}${item.imageUrl}`)
    image.setAttribute('alt', item.alternate)
    image.setAttribute('class', 'w-100');
    imageContainer.appendChild(image);
    videoCard.appendChild(imageContainer);

    const title = document.createElement('h4');
    index!==3 && title.setAttribute('class', 'cardHeading mt-3 cardHeadingWidth');
    index===3 && title.setAttribute('class', 'cardHeading mt-3');
    title.innerText = item.title;
    videoCard.appendChild(title);

    videoContainer.appendChild(videoCard);

}


const data = await fetchData(videoListingUrl.videoUrl);

data.forEach((item) => {
    createElement(item);
    index++;
})
