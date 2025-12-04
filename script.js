// Menu mobile toggle
const btn = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu-list');
btn && btn.addEventListener('click', ()=>{
  menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      if(window.innerWidth<=900 && menuList) menuList.style.display='none';
    }
  });
});

console.log('Script carregado.');