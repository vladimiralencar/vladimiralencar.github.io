// Menu mobile toggle
const btn = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu-list');
btn && btn.addEventListener('click', ()=>{
  const isOpen = menuList.style.display === 'flex';
  menuList.style.display = isOpen ? 'none' : 'flex';
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

function ajustarImagem() {
  const container = document.querySelector('.sobre-container');
  const texto = document.querySelector('.texto-sobre');
  const imagem = document.getElementById('foto-sobre');

  // Altura máxima que a imagem pode ter (para não ultrapassar a área útil)
  const alturaMaxima = container.offsetHeight;

  // Altura desejada baseada no texto
  const alturaTexto = texto.offsetHeight;

  // Ajusta a altura da imagem proporcional, mas respeitando altura máxima
  imagem.style.height = Math.min(alturaTexto, alturaMaxima) + 'px';
}

// Ajusta no carregamento e redimensionamento
window.addEventListener('load', ajustarImagem);
window.addEventListener('resize', ajustarImagem);



console.log('Script carregado.');