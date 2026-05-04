# Requerimientos — Sitio Web Empresa (HTML/CSS Vanilla)

## Stack Tecnológico
- HTML5
- CSS3 (sin frameworks)
- JavaScript vanilla (mínimo, solo para interacción básica)
- GitHub Pages (hosting gratuito)
- Dominio personalizado (comprado en registrador como Namecheap, GoDaddy, etc.)

---

## Estructura de Archivos

```
empresa-sitio/
├── index.html            # Página principal
├── css/
│   └── styles.css        # Estilos globales
├── js/
│   └── main.js           # Script opcional (menú móvil, etc.)
└── assets/
    ├── images/           # Logos, fotos del equipo, etc.
    └── icons/            # Íconos SVG o favicon
```

---

## Secciones de la Página

### 1. Header / Navegación
- Logo de la empresa
- Menú de navegación (links a las secciones)
- Responsive (menú hamburguesa en móvil)

### 2. Hero / Banner Principal
- Imagen o fondo llamativo
- Nombre de la empresa
- Slogan o descripción breve
- Botón de llamada a la acción (ej. "Contáctanos")

### 3. Misión y Visión
- Sección con las dos tarjetas o bloques de texto
- Íconos decorativos opcionales

### 4. Portafolio / Servicios
- Galería o grilla de proyectos/servicios
- Cada item con: imagen, nombre, descripción breve
- Layout con CSS Grid o Flexbox

### 5. Acerca de / Equipo (opcional)
- Breve descripción de la empresa
- Fotos y nombres del equipo (si aplica)

### 6. Contacto
- Número de teléfono
- Correo electrónico
- Redes sociales (links)
- Formulario básico (solo HTML, sin backend — puede usar Formspree o similar)
- Dirección física (si aplica)

### 7. Footer
- Logo
- Links rápidos
- Derechos reservados / año

---

## Requerimientos Técnicos

### Diseño
- [ ] Responsive Design (mobile-first)
- [ ] Paleta de colores definida (variables CSS con `:root`)
- [ ] Tipografía consistente (Google Fonts recomendado)
- [ ] Favicon

### Performance
- [ ] Imágenes optimizadas (WebP preferiblemente, < 200KB cada una)
- [ ] CSS y JS minificados (opcional para sitio pequeño)
- [ ] Sin dependencias externas innecesarias

### SEO Básico
- [ ] `<title>` descriptivo en cada página
- [ ] Meta description
- [ ] Meta tags Open Graph (para compartir en redes sociales)
- [ ] Textos `alt` en todas las imágenes

### Accesibilidad Básica
- [ ] Contraste de colores adecuado
- [ ] Atributos `alt` en imágenes
- [ ] Estructura semántica (`<header>`, `<main>`, `<section>`, `<footer>`)

---

## Configuración GitHub Pages + Dominio

### Pasos de deploy
1. Crear repositorio en GitHub
2. Habilitar GitHub Pages en Settings → Pages → Source: `main` branch
3. Agregar dominio personalizado en Settings → Pages → Custom domain
4. GitHub crea automáticamente el archivo `CNAME`

### Configuración DNS (en el registrador del dominio)
| Tipo | Host | Valor |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tuusuario.github.io |

- SSL/HTTPS: gratuito, habilitado automáticamente por GitHub Pages
- Propagación DNS: puede tardar hasta 24-48 horas

---

## Herramientas de Desarrollo

| Herramienta | Uso |
|---|---|
| VS Code | Editor de código |
| Live Server (extensión VS Code) | Servidor local para desarrollo |
| Chrome DevTools | Inspección y responsive testing |
| Git + GitHub | Control de versiones y deploy |
| Squoosh.app | Optimización de imágenes (gratuito, web) |
| Google Fonts | Tipografías gratuitas |
| Formspree.io | Formulario de contacto sin backend |

---

## Costos Estimados

| Item | Costo |
|---|---|
| Hosting (GitHub Pages) | $0 USD/año |
| SSL (GitHub Pages) | $0 USD/año |
| Dominio (.com) | ~$10-15 USD/año |
| **Total** | **~$10-15 USD/año** |

---

## Lo que NO necesitas
- Node.js / NPM
- Frameworks (React, Vue, Angular)
- Base de datos
- Servidor backend
- Bundlers (Webpack, Vite)



## Pagina a usar como template 

https://www.grupojas.com/proyectos/