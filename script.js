// Menu mobile toggle
const btn = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu-list');

btn && btn.addEventListener('click', () => {
  const isOpen = menuList.style.display === 'flex';
  menuList.style.display = isOpen ? 'none' : 'flex';
});

// Smooth scroll for internal links + hide menu on mobile
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
      if(window.innerWidth <= 900 && menuList) menuList.style.display = 'none';
    }
  });
});

// Highlight active menu item
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.menu-list li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

console.log('Script carregado.');