# GUÍA DE DISEÑO VISUAL
## Portfolio Brenda Quiroz Catalán

---

## 🎨 CONCEPTO DE DISEÑO

### Filosofía
**"Tech Elegance"** - Minimalismo moderno con toques matemáticos

El diseño combina:
- **Elegancia técnica**: Refleja tu background en matemáticas
- **Modernidad funcional**: Muestra tus habilidades de front-end
- **Profesionalismo accesible**: Cálido pero sofisticado

---

## 🎯 AUDIENCIA OBJETIVO

- **Reclutadores tech**: Buscan portafolios profesionales y bien diseñados
- **Empresas startups**: Valoran creatividad y habilidades técnicas
- **Clientes freelance**: Necesitan ver calidad y variedad de proyectos
- **Compañeros developers**: Aprecian buenos diseños y código limpio

---

## 🌈 PALETA DE COLORES

### Colores Principales

```
█ #0F0F0F - NEGRO PROFUNDO
  Background principal
  Uso: Fondo de página, crear contraste

█ #1A1A1A - GRIS OSCURO  
  Background secundario
  Uso: Cards, secciones alternadas

█ #10B981 - VERDE ESMERALDA
  Acento principal
  Uso: CTAs, hover states, highlights
  RGB: 16, 185, 129
  HSL: 160°, 84%, 39%

█ #FBBF24 - AMARILLO DORADO
  Acento secundario
  Uso: Detalles, alternancia de acentos
  RGB: 251, 191, 36
  HSL: 45°, 96%, 56%

█ #F9FAFB - BLANCO HUMO
  Texto principal
  Uso: Títulos, texto importante

█ #9CA3AF - GRIS CLARO
  Texto secundario
  Uso: Descripciones, texto de apoyo

█ #2A2A2A - GRIS MEDIO
  Borders sutiles
  Uso: Separadores, borders de cards
```

### Uso de Colores

**Background**
- Primary sections: #0F0F0F
- Alternate sections: #1A1A1A con opacity 30%
- Cards: #1A1A1A con glassmorphism

**Interacción**
- Hover: #10B981
- Active: #059669 (verde más oscuro)
- Focus: border #10B981

**Tipografía**
- Headers: #F9FAFB
- Body: #9CA3AF
- Highlights: #10B981 o #FBBF24

---

## ✍️ TIPOGRAFÍA

### Fuentes Seleccionadas

**Space Mono** - Monospace
```
Uso: Títulos principales, código, etiquetas
Peso: 400 (Regular), 700 (Bold)
Característica: Da toque técnico/matemático
Ejemplo: <h1>BRENDA QUIROZ CATALÁN</h1>
```

**Inter** - Sans-serif
```
Uso: Texto de cuerpo, párrafos, descripciones
Peso: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
Característica: Legible, moderna, profesional
Ejemplo: <p>Descripción de proyectos...</p>
```

**Poppins** - Display
```
Uso: CTAs, botones especiales
Peso: 600 (Semibold)
Característica: Amigable, llama la atención
Ejemplo: <button>Ver Proyectos</button>
```

### Jerarquía Tipográfica

```
H1 (Hero Name)
  Font: Space Mono Bold
  Size: 64px desktop / 48px tablet / 32px mobile
  Color: #F9FAFB
  Line height: 1.2

H2 (Section Headers)
  Font: Space Mono Bold
  Size: 56px desktop / 40px tablet / 32px mobile
  Color: #F9FAFB
  Line height: 1.2

H3 (Project Titles)
  Font: Space Mono Semibold
  Size: 28px desktop / 24px tablet / 20px mobile
  Color: #F9FAFB
  Line height: 1.3

Body Large
  Font: Inter Regular
  Size: 20px desktop / 18px tablet / 16px mobile
  Color: #9CA3AF
  Line height: 1.6

Body Regular
  Font: Inter Regular
  Size: 18px desktop / 16px tablet / 14px mobile
  Color: #9CA3AF
  Line height: 1.8

Body Small
  Font: Inter Regular
  Size: 16px desktop / 14px tablet / 12px mobile
  Color: #9CA3AF
  Line height: 1.6

Code/Tags
  Font: Space Mono Regular
  Size: 14px desktop / 12px mobile
  Color: #10B981
  Background: #10B981/10
```

---

## 🎭 ANIMACIONES Y TRANSICIONES

### Principios de Animación

1. **Suavidad**: Todas las transiciones son suaves (ease-out)
2. **Propósito**: Cada animación guía la atención
3. **Rendimiento**: CSS animations prioritarias sobre JS
4. **Subtleza**: Efectos notables pero no invasivos

### Catálogo de Animaciones

**1. TYPEWRITER EFFECT (Hero)**
```
Aplicación: Nombre en hero section
Duración: 3 segundos
Efecto: Texto aparece letra por letra
Cursor: Barra verde parpadeante
```

**2. FADE IN**
```
Aplicación: Elementos al cargar
Duración: 0.8 segundos
Ease: ease-in-out
Delay: Escalonado por elemento
```

**3. SLIDE UP**
```
Aplicación: Cards y secciones al scroll
Duración: 0.6 segundos
Movimiento: translateY(50px) → translateY(0)
Opacity: 0 → 1
```

**4. SCALE ON HOVER**
```
Aplicación: Botones, cards de proyectos
Duración: 0.3 segundos
Scale: 1 → 1.05
Box-shadow: Aumenta suavemente
```

**5. GLOW EFFECT**
```
Aplicación: Elementos interactivos
Duración: 2 segundos (loop infinito)
Efecto: Box-shadow pulsa con color verde
```

**6. FLOATING**
```
Aplicación: Elementos decorativos
Duración: 6-8 segundos
Movimiento: translateY suave arriba y abajo
```

**7. PROGRESS BAR**
```
Aplicación: Top de página
Tipo: Scroll-linked
Color: Gradiente verde → dorado
```

**8. STAGGER ANIMATION**
```
Aplicación: Skills, listas
Delay incremental: 0.05s por elemento
Efecto: Aparición secuencial fluida
```

### Timings Recomendados

```
Hover transitions: 300ms
Page load animations: 600-800ms
Scroll reveals: 600ms
Typewriter: 3000ms
Floating decorations: 6000-8000ms
```

---

## 📐 ESPACIADO Y LAYOUT

### Sistema de Espaciado

```
Spacing Scale (basado en 8px)
xs: 8px   (0.5rem)
sm: 16px  (1rem)
md: 24px  (1.5rem)
lg: 32px  (2rem)
xl: 48px  (3rem)
2xl: 64px (4rem)
3xl: 96px (6rem)
```

### Grid System

**Desktop (1440px+)**
```
Container max-width: 1440px
Padding horizontal: 96px (3xl)
Columns: 12 column grid
Gap: 32px
```

**Tablet (768px - 1023px)**
```
Padding horizontal: 48px (xl)
Columns: 8 column grid
Gap: 24px
```

**Mobile (< 768px)**
```
Padding horizontal: 24px (md)
Columns: 4 column grid
Gap: 16px
```

### Sección Padding

```
Section padding vertical:
Desktop: 80px (py-20)
Tablet: 64px (py-16)
Mobile: 48px (py-12)
```

---

## 🎪 COMPONENTES CLAVE

### 1. HERO SECTION

**Estructura:**
```
┌─────────────────────────────────────────┐
│         Background con grid pattern      │
│                                          │
│         [Elemento flotante 1]            │
│                                          │
│         Hello, I'm                       │
│    BRENDA QUIROZ CATALÁN|               │
│                                          │
│  Front-End Developer | Full Stack        │
│                                          │
│    Descripción de 2 líneas              │
│                                          │
│   [Ver Proyectos] [Contacto]            │
│   [GitHub] [LinkedIn]                    │
│                                          │
│         [Elemento flotante 2]            │
│              ↓                           │
│        (scroll indicator)                │
└─────────────────────────────────────────┘
```

**Elementos:**
- Grid pattern: 40px × 40px en #1A1A1A
- Figuras geométricas flotantes animadas
- Typewriter effect en nombre
- Scroll indicator animado

---

### 2. PROJECT CARD

**Estructura:**
```
┌────────────────────────────┐
│                            │
│    [Imagen del proyecto]   │
│    Hover: overlay + btns   │
│                            │
├────────────────────────────┤
│ [React] [Node] [TypeScript]│
│                            │
│ Título del Proyecto        │
│                            │
│ Descripción breve del      │
│ proyecto y sus objetivos   │
│                            │
│ [Ver Demo →] [GitHub]      │
└────────────────────────────┘
```

**Estados:**
- Default: Border #2A2A2A
- Hover: Border #10B981, translateY(-8px)
- Image hover: Overlay dark con botones

---

### 3. SKILL BADGE

**Estructura:**
```
┌──────────────┐
│  React.js    │
└──────────────┘
```

**Estados:**
- Default: bg #1A1A1A, border #2A2A2A
- Hover: Scale 1.1, text color #10B981, glow effect

---

### 4. BOTONES

**Primary Button**
```
Background: #10B981
Color: #0F0F0F
Padding: 12px 24px
Border-radius: 8px
Hover: Scale 1.05 + glow
```

**Secondary Button**
```
Background: Transparent
Border: 2px solid #10B981
Color: #10B981
Hover: Fill con #10B981, color #0F0F0F
```

---

## 🌟 EFECTOS ESPECIALES

### Glassmorphism

```css
background: rgba(26, 26, 26, 0.6);
backdrop-filter: blur(10px);
border: 1px solid rgba(42, 42, 42, 0.3);
```

**Uso:** Cards, navbar, modal overlays

### Gradient Text

```css
background: linear-gradient(135deg, #10B981, #FBBF24);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Uso:** Títulos especiales, highlights

### Grid Pattern

```css
background-image: radial-gradient(circle, #1A1A1A 1px, transparent 1px);
background-size: 40px 40px;
```

**Uso:** Hero background, secciones destacadas

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

```
Mobile Small:   375px
Mobile:         640px
Tablet:         768px
Desktop:        1024px
Large Desktop:  1440px
X-Large:        1920px
```

### Adaptaciones por Dispositivo

**Mobile (< 768px)**
- Layout: Single column
- Font sizes: Reducidos 25-30%
- Padding: Reducido a 24px
- Images: Full width
- Navigation: Hamburger menu

**Tablet (768px - 1023px)**
- Layout: 2 columns en proyectos
- Font sizes: Reducidos 15-20%
- Padding: 48px
- Images: Contained

**Desktop (1024px+)**
- Layout: Diseño completo
- All features visibles
- Hover states activos
- Animaciones completas

---

## ♿ ACCESIBILIDAD

### Contraste

Todos los textos cumplen WCAG AA:
- #F9FAFB on #0F0F0F: 18.4:1 ✓
- #10B981 on #0F0F0F: 6.8:1 ✓
- #9CA3AF on #0F0F0F: 8.2:1 ✓

### Navegación

- Keyboard navigation: Tab order lógico
- Focus states: Visible border verde
- Skip links: Para navegación rápida
- ARIA labels: En iconos y botones

### Semántica

- HTML5 semantic tags
- Heading hierarchy correcta
- Alt text en imágenes
- Form labels apropiados

---

## 🎬 IMPLEMENTACIÓN

### Orden de Desarrollo Recomendado

1. **Setup inicial**
   - Configurar Next.js + TypeScript
   - Instalar Tailwind + Framer Motion
   - Configurar colores y fuentes

2. **Estructura base**
   - Layout y globals.css
   - Navbar y Footer
   - Sistema de grid

3. **Secciones principales**
   - Hero (con typewriter)
   - Projects
   - About
   - Skills
   - Contact

4. **Animaciones**
   - Scroll reveals
   - Hover effects
   - Page transitions

5. **Optimización**
   - Performance
   - Responsive testing
   - Accesibilidad

---

## 🚀 PRÓXIMOS PASOS

### Para mejorar el portfolio:

1. **Añadir imágenes reales** de proyectos
2. **Conectar formulario** a servicio de email (EmailJS, Formspree)
3. **Implementar blog** (opcional)
4. **Añadir testimonios** de clientes/compañeros
5. **Analytics** (Google Analytics, Vercel Analytics)
6. **SEO optimization** completo
7. **Dark/Light mode toggle** (opcional)

---

## 📞 RECURSOS ADICIONALES

### Herramientas de Diseño
- Figma para mockups
- Coolors.co para paletas
- Google Fonts para tipografía
- Unsplash para imágenes placeholder

### Testing
- Lighthouse (Performance)
- WAVE (Accesibilidad)
- BrowserStack (Cross-browser)
- Mobile responsive checkers

---

**Diseñado por:** Brenda Quiroz Catalán
**Fecha:** Enero 2026
**Versión:** 1.0
