# cuadrando-tus-ideas — Template Web Corporativo

Template HTML/CSS/JS vanilla listo para personalizar y desplegar en GitHub Pages.
Basado en el design system de Grupo JAS (estilo corporativo-industrial).

---

## Estructura del Proyecto

```
cuadrando-tus-ideas/
├── index.html              ← Página principal con todas las secciones
├── css/
│   ├── styles.css          ← Punto de entrada (importa todos los parciales)
│   ├── variables.css       ← Tokens de diseño: colores, fuentes, espaciado
│   ├── base.css            ← Reset, body, utilidades globales
│   ├── components.css      ← Todos los componentes reutilizables
│   └── responsive.css      ← Media queries (mobile-first)
├── js/
│   └── main.js             ← Navbar scroll, hamburguesa, fade-in, año footer
└── assets/
    ├── images/             ← Imágenes del sitio (WebP < 200KB recomendado)
    └── icons/
        └── favicon.svg     ← Favicon SVG
```

---

## Componentes disponibles

Cada componente tiene su propia sección en `css/components.css`.
Para usarlos, basta con copiar el HTML de ejemplo de `index.html`.

| # | Componente | Clase base | Ubicación en HTML |
|---|-----------|-----------|-------------------|
| 1 | Botones | `.btn` | En cualquier sección |
| 2 | Navbar | `.navbar` | `<header>` |
| 3 | Hero | `.hero` | `<section class="hero">` |
| 4 | Tarjeta Servicio | `.card` | Dentro de `.services-grid` |
| 5 | Grilla Servicios | `.services-grid` | `<div class="services-grid">` |
| 6 | Bloque Diferencial | `.differential` | Dentro de `.differentials-grid` |
| 7 | CTA Banner | `.cta-banner` | `<div class="cta-banner">` |
| 8 | Logos Clientes | `.clients` | Marquee automático |
| 9 | Misión / Visión | `.mission-card` | Dentro de `.mission-grid` |
| 10 | Contacto | `.contact-grid` | `<section id="contacto">` |
| 11 | Footer | `.footer` | `<footer>` |
| 12 | WhatsApp Flotante | `.whatsapp-btn` | Al final del `<body>` |
| 13 | Equipo (opcional) | `.team-card` | `<section id="equipo">` |

---

## Cómo personalizar

### 1. Colores y tipografía
Edita `css/variables.css`. Todos los valores están centralizados en `:root`.

```css
:root {
  --color-primary: #1A2B4A;   /* Azul corporativo */
  --color-accent:  #F5A623;   /* Amarillo/naranja CTA */
  --font-display:  'Montserrat', sans-serif;
  --font-body:     'Open Sans', sans-serif;
}
```

### 2. Agregar una tarjeta de servicio
Copia este bloque dentro de `.services-grid` en `index.html`:

```html
<article class="card" data-fade>
  <img class="card__image"
       src="assets/images/mi-servicio.jpg"
       alt="Descripción del servicio"
       loading="lazy" />
  <div class="card__body">
    <h3 class="card__title">Nombre del Servicio</h3>
    <p class="card__text">Descripción breve del servicio.</p>
    <a href="#contacto" class="card__link">Conoce Más →</a>
  </div>
</article>
```

### 3. Formulario de contacto (Formspree)
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y copia tu ID
3. Reemplaza en `index.html`:
   ```
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```

### 4. WhatsApp flotante
Cambia el número en `index.html`:
```html
<a href="https://wa.me/52TUNUMERO?text=Hola..." ...>
```

### 5. Animaciones fade-in
Agrega `data-fade` a cualquier elemento que quieras que aparezca
suavemente al hacer scroll:
```html
<div class="mi-elemento" data-fade>...</div>
```

---

## Imágenes necesarias

Coloca en `assets/images/` las siguientes imágenes optimizadas en WebP (< 200KB):

| Archivo | Descripción | Dimensiones sugeridas |
|---------|-------------|----------------------|
| `hero-main.jpg` | Hero principal (fondo) | 1920 × 1080px |
| `hero-secondary.jpg` | Hero secundario | 1920 × 800px |
| `servicio-1.jpg` | Foto Servicio 1 | 800 × 450px |
| `servicio-2.jpg` | Foto Servicio 2 | 800 × 450px |
| `servicio-3.jpg` | Foto Servicio 3 | 800 × 450px |
| `cliente-1.png` a `cliente-5.png` | Logos de clientes (PNG transparente) | ~200 × 80px |
| `equipo-1.jpg` a `equipo-4.jpg` | Fotos del equipo | 400 × 400px |
| `og-image.jpg` | Imagen para redes sociales | 1200 × 630px |

Herramienta gratuita para optimizar: **[squoosh.app](https://squoosh.app)**

---

## Deploy en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a **Settings → Pages**
3. En **Source**, selecciona la rama `main` y carpeta `/ (root)`
4. GitHub Pages publicará el sitio en `https://tuusuario.github.io/cuadrando-tus-ideas`

### Dominio personalizado (DNS)

| Tipo | Host | Valor |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tuusuario.github.io |

---

## Costo estimado

| Item | Costo |
|------|-------|
| Hosting (GitHub Pages) | $0 USD/año |
| SSL (automático) | $0 USD/año |
| Dominio .com | ~$10–15 USD/año |
| **Total** | **~$10–15 USD/año** |

---

## Paleta de colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `--color-primary` | `#1A2B4A` | Header, navbar, footer |
| `--color-accent` | `#F5A623` | Botones CTA, hovers |
| `--color-white` | `#FFFFFF` | Fondos de sección |
| `--color-bg-light` | `#F4F4F4` | Fondos alternos |
| `--color-text` | `#4A4A4A` | Texto cuerpo |
| `--color-footer-bg` | `#111827` | Fondo footer |
