var renderPage = true;
			
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){
    /* Microsoft Internet Explorer detected in. */
    alert("Please view this in a modern browser such as Chrome or Microsoft Edge.");
    renderPage = false;
}
var sidebarVisible = false;
var currentPageID = "#tm-section-1";	
    
    // Setup Carousel
function setupCarousel() {

    // If current page isn't Carousel page, don't do anything.
    if($('#tm-section-3').css('display') == "none" && $('#tm-section-2').css('display') == "none") {
    }
    else {	// If current page is Carousel page, set up the Carousel.

        var slider = $('.tm-img-slider');
        var windowWidth = $(window).width();

        if (slider.hasClass('slick-initialized')) {
            slider.slick('destroy');
        }

        if(windowWidth < 640) {
            slider.slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
        }
        else if(windowWidth < 992) {
            slider.slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
        }
        else {
            // Slick carousel
                slider.slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
        }

        // Init Magnific Popup
        $('.tm-img-slider').magnificPopup({
            delegate: 'img', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {enabled:true}
            // other options
        });
        }
    }

    // Setup Nav
    function setupNav() {
        // Add Event Listener to each Nav item
        $(".tm-main-nav a").click(function(e){
            e.preventDefault();
        
        var currentNavItem = $(this);
        changePage(currentNavItem);
        
        setupCarousel();
        setupFooter();

        // Hide the nav on mobile
        $("#tmSideBar").removeClass("show");
    });	    
    }

    function changePage(currentNavItem) {
        // Update Nav items
        $(".tm-main-nav a").removeClass("active");
        currentNavItem.addClass("active");

    $(currentPageID).hide();

    // Show current page
    currentPageID = currentNavItem.data("page");
    $(currentPageID).fadeIn(1000);

    // Change background image
    var bgImg = currentNavItem.data("bgImg");
    $.backstretch("img/" + bgImg);		    	
    }

    // Setup Nav Toggle Button
    function setupNavToggle() {

    $("#tmMainNavToggle").on("click", function(){
        $(".sidebar").toggleClass("show");
    });
    }

    // If there is enough room, stick the footer at the bottom of page content.
    // If not, place it after the page content
    function setupFooter() {
        
        var padding = 100;
        var footerPadding = 40;
        var mainContent = $("section"+currentPageID);
        var mainContentHeight = mainContent.outerHeight(true);
        var footer = $(".footer-link");
        var footerHeight = footer.outerHeight(true);
        var totalPageHeight = mainContentHeight + footerHeight + footerPadding + padding;
        var windowHeight = $(window).height();		

        if(totalPageHeight > windowHeight){
            $(".tm-content").css("margin-bottom", footerHeight + footerPadding + "px");
            footer.css("bottom", footerHeight + "px");  			
        }
        else {
            $(".tm-content").css("margin-bottom", "0");
            footer.css("bottom", "20px");  				
        }  			
    }

    // Everything is loaded including images.
    $(window).on("load", function(){

        // Render the page on modern browser only.
        if(renderPage) {
        // Remove loader
            $('body').addClass('loaded');

            // Page transition
            var allPages = $(".tm-section");

            // Handle click of "Continue", which changes to next page
            // The link contains data-nav-link attribute, which holds the nav item ID
            // Nav item ID is then used to access and trigger click on the corresponding nav item
            var linkToAnotherPage = $("a.tm-btn[data-nav-link]");
        
        if(linkToAnotherPage != null) {
            
            linkToAnotherPage.on("click", function(){
                var navItemToHighlight = linkToAnotherPage.data("navLink");
                $("a" + navItemToHighlight).click();
            });
        }
            
            // Hide all pages
            allPages.hide();

            $("#tm-section-1").fadeIn();

            // Set up background first page
            var bgImg = $("#tmNavLink1").data("bgImg");
            
            $.backstretch("img/" + bgImg, {fade: 500});

            // Setup Carousel, Nav, and Nav Toggle
        setupCarousel();
        setupNav();
        setupNavToggle();
        setupFooter();

        // Resize Carousel upon window resize
        $(window).resize(function() {
            setupCarousel();
            setupFooter();
        });
        }	      	
});