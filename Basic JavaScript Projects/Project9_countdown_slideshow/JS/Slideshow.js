let slideIndex = 1;   //Assigns the value 1 to "slideIndex"
showSlides(slideIndex);   //Assigns "slideIndex" as parameter to "showSlides"

// Next/previous controls
function plusSlides(n) {   //Creates a function "plusSlides"
    showSlides(slideIndex +=n);   //Indicates the next button adds one to the slide number
}

// Thumbnail image controls
function currentSlide(n) {   //Creates the function "currentSlide"
    showSlides(slideIndex = n);   //Indicates the current slide is indicated by n
}

function showSlides(n) {   //Creates the function "showSlides"
    let i;   //Assigns i
    let slides = document.getElementsByClassName("mySlides");   //Assigns the HTML element to "slides"
    let dots = document.getElementsByClassName("dot");   //Assigns the HTML element to "dots"
    if (n > slides.length) {slideIndex = 1}  //If statement that will move the slide index back to 1 if n is greater than the number of slides
    if (n < 1) {slideIndex = slides.length}  //If statement that will set index to total number of slides if n is less than 1 (make slideshow loop)
    for (i = 0; i < slides.length; i++) {  //Loops over slides setting the display to none, hiding them
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {   //Loops through the dot marked as active
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";   //Display the slide at the current slide index minus 1
    dots[slideIndex-1].className += " active";   //Display the dot as active at the current active dot minus 1
}