// Menu mobile toggle
const btn = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu-list');
btn && btn.addEventListener('click', ()=>{
  const isOpen = menuList.style.display === 'flex';
  menuList.style.display = isOpen ? 'none' : 'flex';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      // hide menu on small screens after click
      if(window.innerWidth<=900 && menuList) menuList.style.display='none';
    }
  });
});

console.log('Script carregado.');


