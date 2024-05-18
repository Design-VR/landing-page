document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("middle");
    });

    const middleIndex = (currentSlide + 1) % totalSlides;
    slides[middleIndex].classList.add("middle");
  }

  function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -((currentSlide + 1) % totalSlides) * 33.3333;
    document.querySelector(
      ".carousel-inner"
    ).style.transform = `translateX(${offset}%)`;
    updateSlides();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    console.log(currentSlide, "prev");
    showSlide(currentSlide - 1);
  }

  function autoRotate() {
    nextSlide();
    setTimeout(autoRotate, 5000); // Change slide every 5 seconds
  }

  document
    .querySelector(".carousel-inner")
    .appendChild(slides[0].cloneNode(true));
  document
    .querySelector(".carousel-inner")
    .prepend(slides[totalSlides - 1].cloneNode(true));
  updateSlides();
  autoRotate();

  // Make the functions globally accessible
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
