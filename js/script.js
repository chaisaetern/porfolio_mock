

// Header animation
// When user scrolls into view animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const slideDown = entry.target.querySelector(".slide-down");
        const fadeIn = entry.target.querySelector(".fade-in");
        const slideRight = entry.target.querySelector(".slide-right");
  
        if (entry.isIntersecting) {
            slideDown.classList.add("slide-down-animation");
            fadeIn.classList.add("fade-in-animation");
            slideRight.classList.add("slide-right-animation");
            return; // if we added the class, exit the function
        }
  
      // We're not intersecting, so remove the class!
        slideDown.classList.remove("slide-down-animation");
        fadeIn.classList.remove("fade-in-animation");
        slideRight.classList.remove("slide-right-animation");
    });
});
  
observer.observe(document.querySelector(".header-text"));





// Slides animation
// When user scrolls into view animation
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector(".square");
        const square2 = entry.target.querySelector(".square-2");
  
        if (entry.isIntersecting) {
            square.classList.add("square-animation");
            square2.classList.add("square-animation-2");
            return; // if we added the class, exit the function
        }
  
      // We're not intersecting, so remove the class!
        square.classList.remove("square-animation");
        square2.classList.remove("square-animation-2");
    });
});

observer2.observe(document.querySelector(".square-wrapper"));