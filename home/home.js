let currentIndex = 0;
let isPlayingVideo = false;

function autoSwitchSlides() {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (isPlayingVideo) return;

  currentIndex = (currentIndex + 1) % totalSlides; // Auto move to the next slide
  const offset = -currentIndex * 50; // Adjust the slide width
  slides.style.transform = `translateX(${offset}%)`;

  const currentSlide = slides.children[currentIndex];
  const video = currentSlide.querySelector('video');
  if (video) {
    isPlayingVideo = true;
    video.play();

    video.onended = () => {
      isPlayingVideo = false;
      autoSwitchSlides(); // Move to the next slide when the video ends
    };
  }
}

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 50; // Adjust the slide width
  slides.style.transform = `translateX(${offset}%)`;

  const currentSlide = slides.children[currentIndex];
  const video = currentSlide.querySelector('video');
  if (video) {
    isPlayingVideo = true;
    video.play();

    video.onended = () => {
      isPlayingVideo = false;
      autoSwitchSlides(); // Move to the next slide when the video ends
    };
  }
}

setInterval(() => {
  if (!isPlayingVideo) autoSwitchSlides(); // Automatically change slide after 5 seconds
}, 5000);

const slidesElement = document.querySelector('.slides');
slidesElement.style.transition = 'transform 0.5s ease-in-out';

