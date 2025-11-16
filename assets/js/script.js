// Toggle Theme
function toggleTheme() {
    console.log('Botão clicado!'); // Debug
    
    const currentTheme = document.body.getAttribute('data-theme');
    console.log('Tema atual:', currentTheme); // Debug
    
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const themeIcon = document.getElementById('themeIcon');
    
    console.log('Novo tema:', newTheme); // Debug
    
    // Aplica o novo tema
    document.body.setAttribute('data-theme', newTheme);
    
    // Atualiza o ícone
    if (newTheme === 'dark') {
        themeIcon.className = 'bx bx-sun';
        console.log('Ícone mudou para sol'); // Debug
    } else {
        themeIcon.className = 'bx bx-moon';
        console.log('Ícone mudou para lua'); // Debug
    }
    
    // Salva no localStorage
    localStorage.setItem('theme', newTheme);
    console.log('Tema salvo:', newTheme); // Debug
}

// Toggle About Details
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!'); // Debug
    
    const toggleButton = document.getElementById('toggleDetails');
    const aboutDetails = document.getElementById('aboutDetails');
    const themeButton = document.getElementById('themeButton');
    
    console.log('Elementos encontrados:', {
        toggleButton: !!toggleButton,
        aboutDetails: !!aboutDetails,
        themeButton: !!themeButton
    }); // Debug

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
        console.log('Evento do tema adicionado'); // Debug
    } else {
        console.log('Botão do tema não encontrado!'); // Debug
    }

    // Carrega tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Tema salvo carregado:', savedTheme); // Debug
    
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (savedTheme === 'dark') {
            themeIcon.className = 'bx bx-sun';
        } else {
            themeIcon.className = 'bx bx-moon';
        }
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
