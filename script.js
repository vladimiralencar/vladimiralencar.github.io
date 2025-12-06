// ===========================
// MENU MOBILE
// ===========================
const menuToggle = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu nav ul');

menuToggle.addEventListener('click', () => {
  const isOpen = menuList.style.display === 'flex';
  menuList.style.display = isOpen ? 'none' : 'flex';
});

// ===========================
// ACCORDION
// ===========================
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
  });
});
