function navbarContent() {
    return `
<nav class="navbar navbar-expand-lg border-bottom">
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

export default navbarContent;
