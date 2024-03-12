import {navbarContent , footerContent} from './reusableComponent/reusable.js'
import data from './helper/data.js';
import { createMemberCard } from './helper/helper.js';
const memberCardContainer = document.querySelector('.memberCardContainer');
const navbar = document.querySelector('.navbarSection');
const footer = document.querySelector('.footer')

data[0].teamMembers.forEach((item)=>{
    createMemberCard(memberCardContainer , item);
})

navbar.innerHTML = navbarContent();
footer.innerHTML=footerContent();

