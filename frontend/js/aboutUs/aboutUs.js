import { aboutUsUrl } from '../helper/url.js';


const volunteerCount = document.querySelector('.volunteerCount');
const churchCount = document.querySelector('.churchCount');
const donationCount = document.querySelector('.donationCount');
const memberCount = document.querySelector('.memberCount');
const prayerCount = document.querySelector('.prayerCount');

async function fetchData() {
    const data = await fetch(aboutUsUrl.statsUrl);
    const jsonData = await data.json();
    insertData(jsonData);
}

fetchData();

function insertData(aboutUsData) {
    const { volunteer, church, donations, member, prayer } = aboutUsData;
    volunteerCount.innerText = volunteer;
    churchCount.innerText = church;
    donationCount.innerText = donations;
    memberCount.innerText = member;
    prayerCount.innerHTML = prayer;
}