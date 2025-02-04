// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('nav ul li a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

// Handle recommendation form submission
document
  .getElementById('recommendation-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.elements[0].value;
    const position = this.elements[1].value;
    const recommendation = this.elements[2].value;
    const newRecommendation = document.createElement('div');

    newRecommendation.className = 'recommendation-item';
    newRecommendation.innerHTML = `
                <p class="recommendation-text">"${recommendation}"</p>
                <p class="recommendation-author">- ${name}, ${position}</p>
            `;

    document
      .getElementById('recommendations-list')
      .appendChild(newRecommendation);

    // Reset form
    this.reset();

    // Show confirmation dialog
    alert('Thank you for your recommendation!');
  });

// Update skill years text based on slider value
document.querySelectorAll('.skill-slider').forEach(slider => {
  const yearsSpan = slider.nextElementSibling;
  const years = slider.value;
  yearsSpan.textContent = years + (years === '1' ? ' year' : ' years');
});

// Set custom property for skill colors
document.querySelectorAll('.skill-item').forEach(item => {
  const color = item.getAttribute('data-color');
  const icon = item.querySelector('.skill-icon');
  const slider = item.querySelector('.skill-slider');

  icon.style.color = color;
  slider.style.backgroundColor = color;

  slider.style.setProperty('--thumb-color', color);
  slider.style.setProperty('--thumb-hover-color', adjustBrightness(color, -20));

  const setValue = () => {
    const value = slider.value;
    const max = slider.max;
    const percentage = (value / max) * 100;
    slider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, #e1e4e8 ${percentage}%, #e1e4e8 100%)`;
  };

  setValue();
  slider.addEventListener('input', setValue);
});

function adjustBrightness(col, amt) {
  let usePound = false;
  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }
  let R = parseInt(col.substring(0, 2), 16);
  let G = parseInt(col.substring(2, 4), 16);
  let B = parseInt(col.substring(4, 6), 16);
  R = R + amt;
  G = G + amt;
  B = B + amt;
  if (R > 255) R = 255;
  else if (R < 0) R = 0;
  if (G > 255) G = 255;
  else if (G < 0) G = 0;
  if (B > 255) B = 255;
  else if (B < 0) B = 0;
  let RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);
  return (usePound ? '#' : '') + RR + GG + BB;
}

// Add this new JavaScript for handling project language colors
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#ffac45',
  Go: '#00ADD8',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  'C#': '#178600',
  '.NET': '#512BD4',
};

document.querySelectorAll('.project-item').forEach(item => {
  const languageElement = item.querySelector('.project-language');
  const languageName = languageElement.textContent.trim();
  const languageDot = languageElement.querySelector('.language-dot');

  if (languageColors[languageName]) {
    languageDot.style.backgroundColor = languageColors[languageName];
  }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  darkModeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
