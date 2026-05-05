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
    const scrollY = window.scrollY + 150;

    // Encontrar la sección más cercana por encima del scroll actual
    let currentId = 'inicio';

    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
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
      5. CARRUSEL HERO
      ---------------------------------------------------------- */

  const track = document.querySelector('.carousel__track');
  const slides = document.querySelectorAll('.carousel__slide');
  const dots = document.querySelectorAll('.carousel__dot');

  if (track && slides.length > 0) {
    let current = 0;
    let autoplayInterval;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
        dot.setAttribute('aria-selected', i === current);
      });
    }

    function startAutoplay() {
      autoplayInterval = setInterval(() => goToSlide(current + 1), 4000);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.slide));
        resetAutoplay();
      });
    });

    startAutoplay();
  }

  /* ----------------------------------------------------------
      6. AÑO DINÁMICO EN FOOTER
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
