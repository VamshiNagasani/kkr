// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  // Add click event listener to the bar element
  bar.addEventListener('click', () => {
    // Code to execute when the bar is clicked (e.g., toggle navbar visibility)
    nav.classList.toggle('active'); // Toggle 'active' class on the navbar
  });
} else {
  // If bar element is not found, activate navbar by default
  nav.classList.add('active');
}

if (close) {
    // Add click event listener to the bar element
    close.addEventListener('click', () => {
      // Code to execute when the bar is clicked (e.g., toggle navbar visibility)
      nav.classList.toggle('active'); // Toggle 'active' class on the navbar
    });
  } else {
    // If bar element is not found, activate navbar by default
    nav.classList.remove('active');
  }