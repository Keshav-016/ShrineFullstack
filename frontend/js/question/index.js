import navbar from '../../component/navbar.js';
import footer from '../../component/footer.js';

const navbarContainer = document.querySelector('.navbarSection');
const footerContainer = document.querySelector('.footer');

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();