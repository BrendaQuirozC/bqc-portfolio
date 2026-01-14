# Portfolio de Brenda Quiroz Catalán
## Front-End Developer | Full Stack Engineer

Portfolio profesional desarrollado con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x600/0F0F0F/10B981?text=Brenda+Quiroz+Portfolio)

## 🎨 Características

- **Diseño Minimalista Moderno**: Paleta oscura con acentos verde esmeralda y dorado
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia premium
- **Fully Responsive**: Diseño adaptable a todos los dispositivos
- **Typewriter Effect**: Animación de escritura en el Hero
- **Scroll Reveal**: Elementos que aparecen suavemente al hacer scroll
- **Progress Bar**: Indicador visual del progreso de scroll
- **Glassmorphism**: Efectos de vidrio esmerilado en componentes
- **Performance Optimizada**: Carga rápida y smooth animations

## 🛠️ Tecnologías

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Font**: Space Mono, Inter, Poppins (Google Fonts)

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/brendaquiroz/portfolio.git
cd portfolio-brenda
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu repositorio a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Deploy automático ✨

### Otros servicios

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio-brenda/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── components/
│   ├── Hero.tsx              # Sección hero con typewriter
│   ├── Projects.tsx          # Proyectos destacados
│   ├── About.tsx             # Sobre mí
│   ├── Skills.tsx            # Skills y tecnologías
│   ├── Contact.tsx           # Formulario de contacto
│   ├── Navbar.tsx            # Navegación con progress bar
│   └── Footer.tsx            # Footer
├── public/                   # Assets estáticos
├── tailwind.config.ts        # Configuración de Tailwind
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias

```

## 🎨 Paleta de Colores

```css
/* Background */
--primary-bg: #0F0F0F (Negro profundo)
--secondary-bg: #1A1A1A (Gris oscuro)

/* Acentos */
--accent-green: #10B981 (Verde esmeralda)
--accent-gold: #FBBF24 (Amarillo dorado)

/* Texto */
--text-primary: #F9FAFB (Blanco humo)
--text-secondary: #9CA3AF (Gris claro)

/* Borders */
--border-subtle: #2A2A2A
```

## ✨ Personalización

### Cambiar colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  'primary-bg': '#TU_COLOR',
  'accent-green': '#TU_COLOR',
  // ...
}
```

### Añadir proyectos

Edita el array `projects` en `components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción...',
    tags: ['React', 'Node.js'],
    demoLink: 'https://...',
    githubLink: 'https://...',
    image: '/tu-imagen.jpg'
  },
  // ...
]
```

### Modificar información personal

Actualiza los textos en cada componente según tus datos.

## 📱 Responsive Breakpoints

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🐛 Solución de Problemas

### Error: Module not found

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Animaciones lentas

Reduce el número de animaciones o aumenta la duración:

```typescript
transition={{ duration: 0.3 }} // más rápido
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👩‍💻 Contacto

- **Email**: brendaqc@hotmail.com
- **LinkedIn**: [linkedin.com/in/brendaquirozmac](https://linkedin.com/in/brendaquirozmac)
- **GitHub**: [@brendaquiroz](https://github.com/brendaquiroz)
- **Ubicación**: Mazatlán, Sinaloa, México

---

Diseñado y desarrollado con ♥ por Brenda Quiroz Catalán
