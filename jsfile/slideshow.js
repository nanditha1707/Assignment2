
let slideIndex = 0;
showSlides(slideIndex);

setInterval(function () {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("slide").length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}, 5000);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[n].style.display = "block";
    dots[n].classList.add("active");
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}
