import { fetchData } from "../helper/fetch.js";
import { eventUrl } from "../helper/url.js";

const eventContainer = document.querySelector('.eventContainer');
const baseUrl = 'http://127.0.0.1:3000/assets'

function createEvent(item) {
    const card = document.createElement('div');
    card.setAttribute('class' , 'col-12 col-sm-6 col-lg-4 , p-4');
    card.innerHTML=`<div class="border rounded-4">
    <div class="position-relative ">
        <img src=${baseUrl}${item.imageUrl} alt=${item.alternate} class="rounded-top-4 w-100">
        <img src="http://127.0.0.1:3000/assets/event/eventSection/calendar.svg" alt="calendar"
            class="position-absolute start-0 bottom-0 ms-3">
    </div>
    <div class="p-3">
        <h6>${item.date}</h6>
        <div class="d-flex my-4">
            <div>
                <img src=${baseUrl}/event/eventSection/time.svg alt="clock">
                <span class="content">${item.time}</span>
            </div>
            <div>
                <img src=${baseUrl}/event/eventSection/location.svg alt="">
                <span class="content">${item.location}</span>
            </div>
        </div>
        <h4 class="cardHeading">${item.title}</h4>
        <p class="content">${item.content}</p>
        <button class="btn btn-dark px-3 py-2">JOIN NOW</button>
    </div>
</div>
    `

    eventContainer.appendChild(card);
}

const data = await fetchData(eventUrl.eventSectionUrl);

console.log(data);

data.forEach((item)=>{
    createEvent(item);
})