// Slideshow images
const slideshow = {
    0: "url('assets/image.jpeg')",
    1 : "url('assets/image2.jpeg')",
    2 : "url('assets/image3.jpeg')"
};

// Track slide currently showing
let currentSlide = 0;

// Swap through images
function moveSlide(x){
    let slides = document.getElementById('slideshow');
    currentSlide += x; // + Right, - left

    // Slide reset
    if (currentSlide === 3){
        currentSlide = 0;
    } else if (currentSlide === -1){
        currentSlide = 2;
    }
    
    slides.style.backgroundImage = slideshow[currentSlide];
    // console.log(currentSlide);
}

