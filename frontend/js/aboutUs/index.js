import navbar from '../../component/navbar.js';
import footer from '../../component/footer.js';


const navbarContainer = document.querySelector('.navbarSection');
const footerContainer = document.querySelector('.footer');
const volunteerCount = document.querySelector('.volunteerCount');
const churchCount = document.querySelector('.churchCount');
const donationCount = document.querySelector('.donationCount');
const memberCount = document.querySelector('.memberCount');
const prayerCount = document.querySelector('.prayerCount');

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

async function fetchData() {
    const data = await fetch('http://127.0.0.1:3000/aboutUs/aboutUsData');
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