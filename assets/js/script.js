// Toggle Theme
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  const themeIcon = document.getElementById('themeIcon');
  
  document.body.setAttribute('data-theme', newTheme);
  
  // Atualiza o ícone
  if (newTheme === 'dark') {
    themeIcon.className = 'bx bx-sun';
  } else {
    themeIcon.className = 'bx bx-moon';
  }
  
  // Salva no localStorage
  localStorage.setItem('theme', newTheme);
}

// Toggle About Details
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleDetails');
  const aboutDetails = document.getElementById('aboutDetails');
  const themeButton = document.getElementById('themeButton');
  
  // Toggle About
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

  // Toggle Theme
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }

  // Carrega tema salvo
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  const themeIcon = document.getElementById('themeIcon');
  if (savedTheme === 'dark') {
    themeIcon.className = 'bx bx-sun';
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

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Typing effect
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    // Inicia o efeito depois de 1 segundo
    setTimeout(typeWriter, 1000);
  }
});

// Adiciona classe scrolled no header quando scrollar
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observa os elementos para animação
document.addEventListener('DOMContentLoaded', function() {
  const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .achievement-item');
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});
