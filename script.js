// Menu mobile toggle
const btn = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu-list');

if(btn) {
  btn.addEventListener('click', () => {
    const isOpen = menuList.style.display === 'flex';
    menuList.style.display = isOpen ? 'none' : 'flex';
  });
} 

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

