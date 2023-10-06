// script.js
$(document).ready(function() {
    var currentIndex = 0;
    var bookContainers = $(".book-container");
    var autoSlideInterval; // Variable to hold the auto slide interval

    function showNextBooks() {
        // Hide the current active books
        bookContainers.slice(currentIndex, currentIndex + 4).removeClass("active");
        
        currentIndex = (currentIndex + 4) % bookContainers.length;
        
        // Show the next set of books as active
        bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");
    }

    function showPrevBooks() {
        // Hide the current active books
        bookContainers.slice(currentIndex, currentIndex + 4).removeClass("active");
        
        currentIndex = (currentIndex - 4 + bookContainers.length) % bookContainers.length;
        
        // Show the previous set of books as active
        bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextBooks, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Automatically start auto sliding
    startAutoSlide();

    // Pause auto sliding on arrow click and restart after manual navigation
    $(".prev-arrow, .next-arrow").click(function() {
        stopAutoSlide();
        startAutoSlide();
    });

    // Show the first set of books as active initially
    bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");

    // Arrow navigation
    $(".prev-arrow").click(showPrevBooks);
    $(".next-arrow").click(showNextBooks);
});



// script.js
$(document).ready(function() {
    var menuIcon = $(".menu-icon");
    var navMenu = $(".homepage-nav");

    // Toggle the navigation menu when the menu icon is clicked
    menuIcon.click(function() {
        navMenu.toggleClass("active");
    });
});

