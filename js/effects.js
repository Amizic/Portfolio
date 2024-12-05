
//Fade-In Cards
document.addEventListener("DOMContentLoaded", function () {
    // Intersection observer for instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // If the element is in the viewport, add the 'visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add("Fade-In-Element-Visible");
          observer.unobserve(entry.target); // Stop observing the element once it is visible
        }
      });
    }, {
      threshold: 0.5 // The element is considered in view when 50% of it is visible
    });
  
    // Target elements that will fade in
    const fadeInElements = document.querySelectorAll('.Fade-In-Element');
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });


  /*Background image fade*/

  const backgroundImages = [
    'img/mountainsA.jpg',
    'img/mountainsB.jpg',
    'img/mountainsC.jpg',
    'img/foxes.jpg'
  ];

  let currentImageIndex = 0;

  function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  }

  setInterval(changeBackground, 7000);