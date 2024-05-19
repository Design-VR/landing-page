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

  // const syncScroll = (scrolledEle, ele) => {
  //   const scrolledPercent =
  //     scrolledEle.scrollTop /
  //     (scrolledEle.scrollHeight - scrolledEle.clientHeight);
  //   const top = scrolledPercent * (ele.scrollHeight - ele.clientHeight);

  //   const scrolledWidthPercent =
  //     scrolledEle.scrollLeft /
  //     (scrolledEle.scrollWidth - scrolledEle.clientWidth);
  //   const left = scrolledWidthPercent * (ele.scrollWidth - ele.clientWidth);

  //   ele.scrollTo({
  //     behavior: "smooth",
  //     top,
  //     left,
  //   });
  // };

  // const handleScroll = (e) => {
  //   new Promise((resolve) => {
  //     requestAnimationFrame(() => resolve());
  //   });
  //   const scrolledEle = e.target;
  //   elements
  //     .filter((item) => item !== scrolledEle)
  //     .forEach((ele) => {
  //       ele.removeEventListener("scroll", handleScroll);
  //       syncScroll(scrolledEle, ele);
  //       window.requestAnimationFrame(() => {
  //         ele.addEventListener("scroll", handleScroll);
  //       });
  //     });
  // };

  // const container = document.getElementById("content-1");
  // const elements = [...container.querySelectorAll(".syncscroll")];

  // elements.forEach((ele) => {
  //   ele.addEventListener("scroll", handleScroll);
  // });

  // let contentInCenter = "";
  // let isScrolling = false;

  // const content1 = document.getElementById("content-1");
  // const content2 = document.getElementById("content-2");
  // const content3 = document.getElementById("content-3");

  // const disableScroll = () => {
  //   document.body.style.overflow = "hidden";
  // };

  // const enableScroll = () => {
  //   document.body.style.overflow = "";
  // };

  // const observer = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (
  //         entry.isIntersecting &&
  //         entry.target.id !== contentInCenter &&
  //         !isScrolling
  //       ) {
  //         console.log("Intersecting", contentInCenter, entry.target.id);
  //         contentInCenter = entry.target.id;
  //         isScrolling = true;
  //         disableScroll();
  //         // Scroll to center of the section when it comes into view
  //         entry.target.scrollIntoView({
  //           behavior: "instant",
  //           block: "center",
  //           inline: "center",
  //         });

  //         setTimeout(() => {
  //           enableScroll();
  //           isScrolling = false;
  //         }, 1000);
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.5, // Trigger when 50% of the section is visible
  //   }
  // );

  // observer.observe(content1);
  // observer.observe(content2);
  // observer.observe(content3);
});
