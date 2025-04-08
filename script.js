/*this makes a functions so that when the side bar is toggled use "active" this was for both title and sidebar*/
function toggleSidebar() {
	const sidebar = document.querySelector('.sidebar');
	const title = document.querySelector('.title');
	sidebar.classList.toggle('active');
	title.classList.toggle('active');
}
/*this adds the fuctions for the slides, it allows for the buttons to comunicate to switch to the next slide, it also allows us to see if the user is on the last slide and if so he should get taken to the first/last slide.*/
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    window.nextSlide = function() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    }

    window.prevSlide = function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSlidePosition();
    }
});