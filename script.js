// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Función para alternar el menú
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mainNav.classList.toggle('is-open');
    });

    // Cerrar el menú si se hace clic en un enlace (para móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Solo si estamos en móvil
                hamburger.classList.remove('is-active');
                mainNav.classList.remove('is-open');
            }
        });
    });

    // Resaltar la página activa en el menú (opcional)
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo (ej: index.html)

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Asegura que solo una esté activa
        }
    });
    // Validación en tiempo real para el campo de teléfono
    const telefonoInput = document.getElementById('telefono');

    if (telefonoInput) { // Asegurarse de que el campo exista
        telefonoInput.addEventListener('input', function(event) {
            // Elimina cualquier caracter que no sea un dígito
            this.value = this.value.replace(/[^0-9]/g, '');

            // Opcional: Limitar la longitud máxima, por ejemplo, 9 o 12 dígitos si incluyes el prefijo
            // if (this.value.length > 9) {
            //     this.value = this.value.slice(0, 9);
            // }
        });
    }

    // Puedes añadir una validación de longitud mínima al intentar enviar el formulario
    // Esto se ejecutará ANTES de que el formulario se envíe realmente
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (telefonoInput && telefonoInput.value.length < 9 && telefonoInput.hasAttribute('required')) {
                alert('Por favor, ingresa al menos 9 dígitos en el campo de teléfono.');
                event.preventDefault(); // Detiene el envío del formulario
            }
        });
    }

}); // Cierre del document.addEventListener

// script.js (añadir dentro del document.addEventListener('DOMContentLoaded', () => { ... }); )

    // Validación en tiempo real para el campo de teléfono
