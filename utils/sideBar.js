document.write(`
<div id="tmSideBar" class="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">
<button id="tmMainNavToggle" class="menu-icon">&#9776;</button>
<div class="inner">
    <nav id="tmMainNav" class="tm-main-nav">
        <ul>
            <li>
                <a href="#intro" id="tmNavLink1" class="scrolly active" data-bg-img="Home_Page.jpg" data-page="#tm-section-1">
                    <i class="fas fa-home tm-nav-fa-icon"></i>
                    <span>Introduction</span>
                </a>
            </li>
            <li>
                <a href="#company" id="tmNavLink2" class="scrolly" data-bg-img="Experience_page.jpg" data-page="#tm-section-3">
                    <i class="fa fa-user tm-nav-fa-icon"></i>
                    <span>Skills</span>
                </a>
            </li>
            <li>
                <a href="#products" class="scrolly" data-bg-img="Project_page_2.jpg" data-page="#tm-section-2" data-page-type="carousel">
                    <i class="fas fa-map tm-nav-fa-icon"></i>
                    <span>Projects</span>
                </a>
            </li>							
            <li>
                <a href="#contact" class="scrolly" data-bg-img="Contact_page.jpg" data-page="#tm-section-4">
                    <i class="fas fa-comments tm-nav-fa-icon"></i>
                    <span>Contact</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</div>
`)