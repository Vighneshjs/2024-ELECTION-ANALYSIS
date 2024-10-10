// Easter Egg Click Event to reveal hidden section
const easterEgg = document.getElementById('easter-egg');
const hiddenSection = document.getElementById('hidden-section');

easterEgg.addEventListener('click', () => {
  hiddenSection.style.display = 'block';
});

// Scroll-to-top button visibility and function
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Get references to the close button and hidden section
const closeButton = document.querySelector('.close-button');

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the hidden section when the button is clicked
  hiddenSection.style.display = 'none';
});