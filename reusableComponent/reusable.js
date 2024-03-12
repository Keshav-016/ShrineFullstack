export function navbarContent() {
    return `
<nav class="navbar navbar-expand-lg border-bottom z-3">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center d-block d-lg-none" href="#">
            <img src="images/logo/shrine-black.svg" alt="logo" width="150px" class="logo"/>
        </a>
        <button class="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
         aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
            <ul class="navbar-nav gap-3">
                <li class="nav-item">
                     <a class="nav-link navbarContent" href="#"><b>Home</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbarContent" href="#"><b>Pages</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbarContent" href="#"><b>Blog</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbarContent" href="#"><b>Donations</b></a>
                </li>
            </ul>
        </div>
        <a href="#" class="position-absolute shrineLogo bg-white">
            <img src="./images/logo/shrine-black.svg" alt="main-logo" class="d-none d-lg-block logo" />
        </a>
        <div class="collapse navbar-collapse justify-content-end gap-3" id="navbarNavAltMarkup">
            <ul class="navbar-nav align-items-lg-center gap-3">
                <li class="nav-item">
                    <a class="nav-link navbarContent" href="#"><b>Shop</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbarContent" href="#"><b>Contacts</b></a>
                </li>
            </ul>
            <div class="d-flex gap-3 mt-2 mt-lg-0">
                <div>
                    <img src="./images/nav/search.svg" alt="search" class="w-75 item" />
                </div>
                <div class="position-relative">
                    <img src="./images/nav/bag.svg" alt="bag" class="item" />
                    <span class="itemCount d-flex justify-content-center">2</span>
                </div>
            </div>
        </div>
    </div>
</nav>`
};


export function footerContent() {
    return `
<div class="container">
    <div class="row pt-3">
        <a href="#" class="col-5 col-sm-4 col-md-3 col-lg-2 my-auto"><img src="./images/logo/shrine-white.svg"
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
            <li><a href="#" class="text-decoration-none">Culture</a></li>
            <li><a href="#" class="text-decoration-none">Blog</a></li>
        </ul>
        <ul class="list-unstyled d-flex flex-column gap-2 footerContent">
            <li class="mb-3 font-weight-bold">
                <a href="#" class="text-decoration-none text-white">Support</a>
            </li>
            <li>
                <a href="#" class="text-decoration-none">Getting Started</a>
            </li>
            <li><a href="#" class="text-decoration-none">Help Center</a></li>
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
            <input type="text" placeholder="Enter your email"
                class="p-3 rounded-2 w-100 bg-dark border-0 content" />
            <button class="btn text-white border-0 p-3 mt-0 mt-md-3">Subscribe</button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column flex-sm-row justify-content-between">
        <p class="content mx-auto mx-sm-0">
            Copyright © 2022 Shrine | All Rights Reserved
        </p>
        <div class="d-flex gap-2 mx-auto mx-sm-0">
            <a href="#"><img src="./images/logo/instagram.svg" alt="instagram" /></a>
            <a href="#"><img src="./images/logo/twitter.svg" alt="twitter" /></a>
            <a href="#"><img src="./images/logo/whatsapp.svg" alt="whatsapp" /></a>
            <a href="#"><img src="./images/logo/youtube.svg" alt="youtube" /></a>
            <a href="#"><img src="./images/logo/facebook.svg" alt="facebook" /></a>
        </div>
    </div>
</div>
    `
}
