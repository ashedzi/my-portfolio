document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is running!"); // Log to console to ensure JS is running

  var options = {
    strings: ["UI/UX Designer", "Software Developer"], // Only these will change
    typeSpeed: 60, // Typing speed
    backSpeed: 50, // Deleting speed
    backDelay: 1000, // Delay before it deletes text
    startDelay: 500, // Delay before starting the typing
    loop: true, // Loop the animation
    showCursor: true, // Show cursor
    cursorChar: "|", // Cursor style
  };

  // Initialize Typed.js on the span element
  var typedInstance = new Typed("#dynamic-text", options); // Targeting the dynamic part
});


document.addEventListener("mousemove", function(e) {
  const cursor = document.querySelector(".cursor");
  
  // Get mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Move the custom cursor (ball) to the cursor position
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});

// Function to scroll to the next section
function scrollToNextSection() {
  const nextSection = document.getElementById('about');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to hide the arrow when scrolling past the hero section
window.addEventListener('scroll', function () {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const heroSection = document.getElementById('hero');
  
  // Check if the user has scrolled past the hero section
  if (window.scrollY > heroSection.offsetHeight) {
      scrollIndicator.classList.add('hidden');
  } else {
      scrollIndicator.classList.remove('hidden');
  }
});