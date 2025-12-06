// ===================== MENU MOBILE =====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('header nav ul');

menuToggle && menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'flex';
  navMenu.style.display = isOpen ? 'none' : 'flex';
});

// ===================== ACCORDIONS =====================
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const chev = header.querySelector('.chev');

  header.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Fecha todos os outros accordions
    accordions.forEach(other => {
      const otherContent = other.querySelector('.accordion-content');
      const otherChev = other.querySelector('.chev');
      if (otherContent !== content) {
        otherContent.style.maxHeight = null;
        otherChev.style.transform = 'rotate(0deg)';
      }
    });

    if (isOpen) {
      content.style.maxHeight = null;
      chev.style.transform = 'rotate(0deg)';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      chev.style.transform = 'rotate(180deg)';
    }
  });
});
