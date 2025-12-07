// MENU MOBILE
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('header nav ul');

menuToggle && menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'flex';
  navMenu.style.display = isOpen ? 'none' : 'flex';
});

// ACCORDIONS
document.querySelectorAll('.accordion-item').forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const chev = header.querySelector('.chev');

  header.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.previousElementSibling.querySelector('.chev').style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      chev.style.transform = 'rotate(180deg)';
    }
  });
});
