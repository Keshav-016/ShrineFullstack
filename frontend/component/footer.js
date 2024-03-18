const footerContainer = document.querySelector('.footer');

footerContainer.innerHTML =` <div class="container">
    <div class="row pt-3">
        <a href="#" class="col-5 col-sm-4 col-md-3 col-lg-2 my-auto"><img src="http://127.0.0.1:3000/assets/footer/shrineWhite.svg"
                alt="shrineLogo" class="w-100" /></a>
        <p class="content col-12 col-md-5 ms-auto mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
        </p>
    </div>
    <hr />
    <div class="d-flex justify-content-between flex-wrap p-5">
        <ul class="list-unstyled d-flex flex-column gap-2 footerContent">
            <li class="mb-3 font-weight-bold">
                <a href="#" class="text-decoration-none text-white">Quick link</a>
            </li>
            <li><a href="#" class="text-decoration-none">Features</a></li>
            <li><a href="#" class="text-decoration-none">Pricing</a></li>
            <li><a href="#" class="text-decoration-none">Case-studies</a></li>
            <li><a href="#" class="text-decoration-none">Reviews</a></li>
            <li><a href="#" class="text-decoration-none">Updates</a></li>
        </ul>
        <ul class="list-unstyled d-flex flex-column gap-2 footerContent">
            <li class="mb-3 font-weight-bold">
                <a href="#" class="text-decoration-none text-white">Company</a>
            </li>
            <li><a href="#" class="text-decoration-none">About</a></li>
            <li><a href="#" class="text-decoration-none">Contact us</a></li>
            <li><a href="#" class="text-decoration-none">Career Us</a></li>
            <li><a href="/frontend/pages/gallery.html" class="text-decoration-none">Culture</a></li>
            <li><a href="#" class="text-decoration-none">Blog</a></li>
        </ul>
        <ul class="list-unstyled d-flex flex-column gap-2 footerContent">
            <li class="mb-3 font-weight-bold">
                <a href="#" class="text-decoration-none text-white">Support</a>
            </li>
            <li>
                <a href="#" class="text-decoration-none">Getting Started</a>
            </li>
            <li><a href="/frontend/pages/question.html" class="text-decoration-none">Help Center</a></li>
            <li><a href="#" class="text-decoration-none">Server Status</a></li>
            <li><a href="#" class="text-decoration-none">Report a bug</a></li>
            <li><a href="#" class="text-decoration-none">Chst Support</a></li>
        </ul>
        <div class="d-flex flex-column justify-content-between align-items-start mt-5 mt-md-0 gap-3 gap-md-0">
            <span>Subscribe to our newsletter</span>
            <p class="content">
                Lorem ipsum dolor sit amet consectetur <br />
                adipiscing elit aliquam.
            </p>
            <input type="text" placeholder="Enter your email" class="p-3 rounded-2 w-100 bg-dark border-0 content" />
            <button class="btn text-white border-0 p-3 mt-0 mt-md-3">Subscribe</button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column flex-sm-row justify-content-between">
        <p class="content mx-auto mx-sm-0">
            Copyright © 2022 Shrine | All Rights Reserved
        </p>
        <div class="d-flex gap-2 mx-auto mx-sm-0">
            <a href="#"><img src="http://127.0.0.1:3000/assets/footer/instagram.svg" alt="instagram" /></a>
            <a href="#"><img src="http://127.0.0.1:3000/assets/footer/twitter.svg" alt="twitter" /></a>
            <a href="#"><img src="http://127.0.0.1:3000/assets/footer/whatsapp.svg" alt="whatsapp" /></a>
            <a href="#"><img src="http://127.0.0.1:3000/assets/footer/youtube.svg" alt="youtube" /></a>
            <a href="#"><img src="http://127.0.0.1:3000/assets/footer/facebook.svg" alt="facebook" /></a>
        </div>
    </div>
</div> `