import {fetchData} from '../helper/fetch'

const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const eventImage = document.querySelector('#eventImage');
const eventTitle = document.querySelector('#eventTitle');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const location = document.querySelector('#location');
const description = document.querySelector('#description');
const contentContainer = document.querySelector('contentContainer');
const point = document.querySelector('.point');
const contentFooter = document.querySelector('#contentFooter');
const featureImage = document.querySelector('#featureImage');
const featureDate = document.querySelector('#featureDate');
const featureLocation = document.querySelector('#featureLocation');
const featuretitle = document.querySelector('#featureTitle');

const data = await fetchData('127.0.0.1:3000/eventDetail/eventDetailData');