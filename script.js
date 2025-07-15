// Theme toggle functionality
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
    });
});

// Modal popup logic for project details
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.querySelector('.modal-close');
const projectButtons = document.querySelectorAll('.project-link');

const projectDetails = {
  'discord-bot': {
    title: 'Discord Bot',
    desc: 'A custom Discord chatbot built with Node.js, designed to automate tasks, respond to commands, and enhance server interactions.',
    tech: 'Node.JS, Express.JS',
    img: './images/discord-bot.jpg',
    extra: 'Features: Moderation, music, custom commands, and more.'
  },
  'spotify': {
    title: 'Spotify static frontend page',
    desc: 'A frontend clone of Spotify, showcasing an intuitive UI/UX design using React, Tailwind CSS, and HTML.',
    tech: 'React, Tailwind CSS, HTML',
    img: './images/spotify.jpg',
    extra: 'Responsive design, playlist UI, and smooth transitions.'
  },
  'weatherapp': {
    title: 'Weather APP',
    desc: 'A web application that fetches real-time weather data using an API and displays current conditions in a user-friendly interface.',
    tech: 'HTML, CSS, JavaScript',
    img: './images/weatherapp.jpg',
    extra: 'Live weather, search by city, and animated icons.'
  }
};

projectButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const key = btn.getAttribute('data-modal');
    const details = projectDetails[key];
    if (details) {
      modalContent.innerHTML = `
        <h2 id="modal-title">${details.title}</h2>
        <img src="${details.img}" alt="${details.title} large preview" style="width:100%;border-radius:12px;margin:1rem 0;" />
        <p id="modal-desc">${details.desc}</p>
        <p><strong>Tech:</strong> ${details.tech}</p>
        <p>${details.extra}</p>
      `;
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      modalClose.focus();
    }
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
window.addEventListener('keydown', e => {
  if (modalOverlay.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
    closeModal();
  }
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
function handleFadeIn() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);