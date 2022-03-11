

// Header animation
// When user scrolls into view animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const slideDown = entry.target.querySelector(".slide-down");
        const pulse = entry.target.querySelector(".pulse");
        const slideRight = entry.target.querySelector(".slide-right");
  
        if (entry.isIntersecting) {
            slideDown.classList.add("slide-down-animation");
            pulse.classList.add("pulse-animation");
            slideRight.classList.add("slide-right-animation");
            return; // if we added the class, exit the function
        }
  
      // We're not intersecting, so remove the class!
        slideDown.classList.remove("slide-down-animation");
        pulse.classList.remove("pulse-animation");
        slideRight.classList.remove("slide-right-animation");
    });
});
  
observer.observe(document.querySelector(".header-text"));



// Rotating button animation
// When user scrolls into view animation
const observerBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const rotatingBtn = entry.target.querySelector(".rotating-btn");
  
        if (entry.isIntersecting) {
            rotatingBtn.classList.add("rotating-btn-animation");
            return; // if we added the class, exit the function
        }
  
      // We're not intersecting, so remove the class!
        rotatingBtn.classList.remove("rotating-btn-animation");
    });
});

observerBtn.observe(document.querySelector(".rotating-btn-wrapper"));



// Slides animation
// When user scrolls into view animation
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector(".square");
  
        if (entry.isIntersecting) {
            square.classList.add("square-animation");
            return; // if we added the class, exit the function
        }
  
      // We're not intersecting, so remove the class!
        square.classList.remove("square-animation");
    });
});

observer2.observe(document.querySelector(".square-wrapper"));