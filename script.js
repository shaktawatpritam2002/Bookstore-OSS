// // script.js
// $(document).ready(function() {
//     var currentIndex = 0;
//     var bookContainers = $(".book-container");
//     var autoSlideInterval; // Variable to hold the auto slide interval

//     function showNextBooks() {
//         // Hide the current active books
//         bookContainers.slice(currentIndex, currentIndex + 4).removeClass("active");
        
//         currentIndex = (currentIndex + 4) % bookContainers.length;
        
//         // Show the next set of books as active
//         bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");
//     }

//     function showPrevBooks() {
//         // Hide the current active books
//         bookContainers.slice(currentIndex, currentIndex + 4).removeClass("active");
        
//         currentIndex = (currentIndex - 4 + bookContainers.length) % bookContainers.length;
        
//         // Show the previous set of books as active
//         bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");
//     }

//     function startAutoSlide() {
//         autoSlideInterval = setInterval(showNextBooks, 3000);
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//     }

//     // Automatically start auto sliding
//     startAutoSlide();

//     // Pause auto sliding on arrow click and restart after manual navigation
//     $(".prev-arrow, .next-arrow").click(function() {
//         stopAutoSlide();
//         startAutoSlide();
//     });

//     // Show the first set of books as active initially
//     bookContainers.slice(currentIndex, currentIndex + 4).addClass("active");

//     // Arrow navigation
//     $(".prev-arrow").click(showPrevBooks);
//     $(".next-arrow").click(showNextBooks);
// });



// // script.js
// $(document).ready(function() {
//     var menuIcon = $(".menu-icon");
//     var navMenu = $(".homepage-nav");

//     // Toggle the navigation menu when the menu icon is clicked
//     menuIcon.click(function() {
//         navMenu.toggleClass("active");
//     });
// });

searchForm = document.querySelector('search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.navbar').classList.add('active');
    }
    else{
        document.querySelector('.navbar').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY>80){
        document.querySelector('.navbar').classList.add('active');
    }
    else{
        document.querySelector('.navbar').classList.remove('active');
    }
}