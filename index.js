import navbarContent from './reusableComponent/navbar.js';
import footerContent from './reusableComponent/footer.js'
const navbar = document.querySelector('.navbarSection');
const footer = document.querySelector('.footer')

navbar.innerHTML = navbarContent();
footer.innerHTML=footerContent();