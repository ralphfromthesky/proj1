var sliders = document.querySelectorAll('.slider');
var prevBtns = document.querySelectorAll('#prevBtn');
var nextBtns = document.querySelectorAll('#nextBtn');

sliders.forEach((slider, index) => {
  let slideIndex = 0;

  const showSlide = (index) => {
    slider.style.transform = `translateX(-${index * 10}%)`;
  }

  const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(slideIndex);
  }

  const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slider.children.length;
    showSlide(slideIndex);
  }

  prevBtns[index].addEventListener('click', prevSlide);
  nextBtns[index].addEventListener('click', nextSlide);
});
