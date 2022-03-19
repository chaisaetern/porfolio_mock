// onClick for play_btn to scroll body-container into view
const bodyContainer = document.querySelector(".body-container");

// Smooth scroll to element and align it at the top
const btnScroller = () => bodyContainer.scrollIntoView({ behavior: 'smooth', block: 'start'});


// Header animation
// When user scrolls into view animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const slideDown = entry.target.querySelector(".slide-down");
        const pulse = entry.target.querySelector(".pulse");
        const slideRight = entry.target.querySelector(".slide-right");
        
        // Check if screen is intersecting
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
        
        // Check if screen is intersecting
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
    
    // For each element in view add/remove class
    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 85;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealed");
        } else {
            reveals[i].classList.remove("revealed");
        }

    }

}




// Visitor counter
const counter = document.querySelector(".website-counter");

const visitorCounter = () => {

    let visitCount = localStorage.getItem("page_view");
    
    // Add entry for key="page_view"
    localStorage.setItem("page_view", 1);
    visitCount = Number(visitCount) + 1;
    
    // Update local storage value
    localStorage.setItem("page_view", visitCount);

    counter.innerHTML = visitCount;

}

visitorCounter();