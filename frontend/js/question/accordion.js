import { fetchData } from "../helper/fetch.js";

const leftAccordion = document.querySelector('.leftAccordion');
const rightAccordion = document.querySelector('.rightAccordion');


function createAccordion(item ,index, container) {
    const accordionItem = document.createElement('div');
    accordionItem.setAttribute('class', 'accordion-item');
    accordionItem.innerHTML = ` <h2 class="accordion-header">
        <button class="accordion-button collapsed accordionIndex" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
            <span class=" px-2 py-1 me-3 rounded-3 border d-flex justify-content-around  align-items-center">${index}</span>
            ${item.question}
        </button>
    </h2>
    <div id="flush-collapse${index}" class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body content">${item.answer}</div>
    </div>`
    container.appendChild(accordionItem);
}

function insertData(data) {
    let n;
    if(data.length%2===0){
        n=(data.length/2)-1;
    }
    else{
        n=data.length/2;
    }
    data.forEach((item,index) => {
        if(index<=n){
            createAccordion(item , index , leftAccordion);
        }
        else{
            createAccordion(item , index , rightAccordion);
        }
    })
}

const data = await fetchData('http://127.0.0.1:3000/question/questionData');

insertData(data);



