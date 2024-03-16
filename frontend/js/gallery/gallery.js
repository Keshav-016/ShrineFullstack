import { galleryUrl } from '../helper/url.js';
import { fetchData } from '../helper/fetch.js';

const baseUrl = 'http://127.0.0.1:3000/assets';
const galleryImageContainer = document.querySelector('.galleryImageContainer');
const filterMenu = document.querySelector('.filterMenu');
const all = document.querySelector('.all');

let previousSelectedFilter=all;




function createGallery(data) {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class' , 'col-12 col-sm-4')
        const image = document.createElement('img');
        image.setAttribute('src', baseUrl+data.imageUrl);
        image.setAttribute('alt', data.alternateText)
        image.setAttribute('class' , 'w-100 mb-3');
        imageContainer.appendChild(image);
        galleryImageContainer.appendChild(imageContainer);
}



const data = await fetchData(galleryUrl.bottomGalleryUrl);
data.forEach((item)=>{
    createGallery(item)
});

function filterData(type){
    galleryImageContainer.innerHTML='';
    if(type==='All'){
        data.forEach((item)=>{
            createGallery(item)
        });
    }
    else{
        data.forEach((item)=>{
            if(item.imageType===type){
                createGallery(item);
            }
        });
    }

}

filterMenu.addEventListener( "click", (event)=>{
    filterData(event.target.innerText);
    previousSelectedFilter.style.borderColor='#FFFF';
    previousSelectedFilter = event.target;
    event.target.style.borderColor= "#c0304f";
})