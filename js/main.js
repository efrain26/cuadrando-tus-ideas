/* ============================================================
   MAIN.JS — Interacciones básicas (Vanilla JS)
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. NAVBAR — scroll effect + hamburguesa móvil
     ---------------------------------------------------------- */

  const navbar      = document.querySelector('.navbar');
  const hamburger   = document.querySelector('.navbar__hamburger');
  const menu        = document.querySelector('.navbar__menu');

  // Clase "scrolled" al bajar de 80px
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  // Toggle menú móvil
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer click en un link
    menu.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     2. ACTIVE LINK — resaltar sección activa en el navbar
     ---------------------------------------------------------- */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');

  function setActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ----------------------------------------------------------
     3. FADE-IN ON SCROLL — animación suave de secciones
     ---------------------------------------------------------- */

  const fadeEls = document.querySelectorAll('[data-fade]');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar todo si no hay soporte
    fadeEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ----------------------------------------------------------
     4. AÑO DINÁMICO EN FOOTER
     ---------------------------------------------------------- */

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();


/* ============================================================
   ESTILOS DE ANIMACIÓN FADE-IN (se pueden mover a CSS)
   ============================================================

   Agrega al final de components.css si prefieres:

   [data-fade] {
     opacity: 0;
     transform: translateY(24px);
     transition: opacity 0.55s ease, transform 0.55s ease;
   }
   [data-fade].is-visible {
     opacity: 1;
     transform: translateY(0);
   }

   ============================================================ */
