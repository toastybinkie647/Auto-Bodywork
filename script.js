//let btn = document.querySelector("#btn");
//let sidebar = document.querySelector(".sidebar");

//btn.onclick = function () {
	//sidebar.classList.toggle("active");
//};

function toggleSidebar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('active');
}

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