// onClick for play_btn to scroll body-container into view
const bodyContainer = document.querySelector(".body-container");

// smooth scroll to element and align it at the top
const btnScroller = () => bodyContainer.scrollIntoView({ behavior: 'smooth', block: 'start'});


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




// ====================
// Animation reveals elements from the DOM on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealed");
        } else {
            reveals[i].classList.remove("revealed");
        }

    }

}