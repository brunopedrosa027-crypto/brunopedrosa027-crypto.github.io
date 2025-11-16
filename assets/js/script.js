// Toggle About Details
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleDetails');
  const aboutDetails = document.getElementById('aboutDetails');
  
  if (toggleButton && aboutDetails) {
    toggleButton.addEventListener('click', function() {
      if (aboutDetails.classList.contains('expanded')) {
        aboutDetails.classList.remove('expanded');
        toggleButton.innerHTML = '<span>Ver mais</span><i class="bx bx-chevron-down"></i>';
      } else {
        aboutDetails.classList.add('expanded');
        toggleButton.innerHTML = '<span>Ver menos</span><i class="bx bx-chevron-up"></i>';
      }
    });
  }

  // Active navigation link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
