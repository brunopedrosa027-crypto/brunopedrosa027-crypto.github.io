// Funcionalidade do botão "Ver mais/Ver menos" no Sobre Mim
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleAbout');
  const aboutFull = document.getElementById('aboutFull');
  let isExpanded = false;

  if (toggleButton && aboutFull) {
    toggleButton.addEventListener('click', function() {
      if (isExpanded) {
        aboutFull.classList.remove('expanded');
        toggleButton.textContent = 'Ver mais';
      } else {
        aboutFull.classList.add('expanded');
        toggleButton.textContent = 'Ver menos';
      }
      isExpanded = !isExpanded;
    });
  }

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
