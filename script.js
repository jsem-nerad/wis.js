// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-toggle-icon');

// Check for saved theme preference or use device preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    }
});



const aboutLink = document.getElementById('aboutLink');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.getElementById('closeModal');

// Modal functionality
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    aboutModal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    aboutModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});