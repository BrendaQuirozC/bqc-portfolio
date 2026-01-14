# 🚀 GUÍA RÁPIDA DE INICIO
## Portfolio Brenda Quiroz Catalán

---

## ⚡ INSTALACIÓN EN 5 MINUTOS

### Paso 1: Descargar el proyecto

Has recibido el archivo `portfolio-brenda.tar.gz` o la carpeta `portfolio-brenda/`

### Paso 2: Descomprimir (si aplica)

```bash
tar -xzf portfolio-brenda.tar.gz
cd portfolio-brenda
```

### Paso 3: Instalar dependencias

```bash
npm install
```

⏱️ Esto tomará 2-3 minutos

### Paso 4: Ejecutar en desarrollo

```bash
npm run dev
```

### Paso 5: ¡Listo! 🎉

Abre tu navegador en: **http://localhost:3000**

---

## 📝 PERSONALIZACIÓN RÁPIDA

### 1. Cambiar tu información personal

**Archivo:** `components/Hero.tsx`
```typescript
// Línea ~12: Cambiar el nombre
const fullText = 'TU NOMBRE AQUÍ'

// Línea ~50: Cambiar el subtítulo
Front-End Developer | Tu Título

// Línea ~58: Cambiar la descripción
Tu descripción personal aquí...
```

**Archivo:** `components/About.tsx`
```typescript
// Línea ~50+: Editar toda tu biografía
```

### 2. Añadir tus proyectos

**Archivo:** `components/Projects.tsx`
```typescript
// Línea ~14+: Editar el array de proyectos
const projects: Project[] = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción...',
    tags: ['React', 'Node.js', 'TypeScript'],
    demoLink: 'https://tu-demo.com',
    githubLink: 'https://github.com/tu-usuario/proyecto',
    image: '/ruta-imagen.jpg'
  },
  // Añade más proyectos aquí...
]
```

### 3. Actualizar skills

**Archivo:** `components/Skills.tsx`
```typescript
// Línea ~8+: Editar el array de skills
const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Tu Skill', category: 'Frontend' },
  // ...
]
```

### 4. Cambiar enlaces sociales

**Archivo:** `components/Hero.tsx` y `components/Contact.tsx`
```typescript
// Buscar y reemplazar tus URLs:
href="https://github.com/TU-USUARIO"
href="https://linkedin.com/in/TU-PERFIL"
href="mailto:TU-EMAIL@EMAIL.COM"
```

### 5. Cambiar colores (Opcional)

**Archivo:** `tailwind.config.ts`
```typescript
colors: {
  'accent-green': '#10B981', // Cambia a tu color favorito
  'accent-gold': '#FBBF24',  // Cambia el segundo color
  // ...
}
```

---

## 🎨 AÑADIR IMÁGENES DE PROYECTOS

### Opción 1: Imágenes locales

1. Coloca tus imágenes en la carpeta `public/`
```
public/
  ├── project1.jpg
  ├── project2.jpg
  └── tu-foto.jpg
```

2. Referéncialas en el código:
```typescript
image: '/project1.jpg'
```

### Opción 2: URLs externas

```typescript
image: 'https://tuservidor.com/imagen.jpg'
```

### Opción 3: Placeholder temporal

Mientras consigues las imágenes, el diseño ya incluye placeholders con el símbolo `{ }` que se ve profesional.

---

## 🚀 DESPLIEGUE A VERCEL (GRATIS)

### Método 1: Con GitHub (Recomendado)

1. **Sube tu código a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git push -u origin main
```

2. **Ve a Vercel.com**
   - Crea una cuenta (puedes usar tu GitHub)
   - Click en "Import Project"
   - Selecciona tu repositorio
   - Click en "Deploy"

3. **¡Listo!** Tu portfolio estará en:
   `https://tu-portfolio.vercel.app`

### Método 2: Deploy directo

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Sigue las instrucciones en terminal

---

## ✅ CHECKLIST PRE-DEPLOY

Antes de publicar tu portfolio, asegúrate de:

- [ ] Cambiar tu nombre en Hero
- [ ] Añadir tus proyectos reales
- [ ] Actualizar tu biografía
- [ ] Añadir tus skills
- [ ] Cambiar todos los enlaces sociales
- [ ] Revisar que todo funcione en mobile
- [ ] Probar el formulario de contacto
- [ ] Añadir imágenes de proyectos
- [ ] Verificar que no haya "TU_INFO_AQUÍ"
- [ ] Probar en diferentes navegadores

---

## 🐛 SOLUCIÓN DE PROBLEMAS COMUNES

### Error: "Module not found"

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### El puerto 3000 está en uso

```bash
npm run dev -- -p 3001
```

O cierra la aplicación que está usando el puerto 3000

### Las animaciones se ven lentas

En `tailwind.config.ts`, puedes ajustar las duraciones:
```typescript
transition={{ duration: 0.3 }} // Más rápido
```

### No veo mis cambios

Asegúrate de guardar el archivo y recarga el navegador (Ctrl+R o Cmd+R)

---

## 📚 ARCHIVOS IMPORTANTES

```
portfolio-brenda/
├── 📄 README.md              ← Documentación completa
├── 📄 DESIGN-GUIDE.md        ← Guía de diseño detallada
├── 📄 QUICK-START.md         ← Este archivo
│
├── app/
│   ├── globals.css           ← Todos los estilos y animaciones
│   ├── layout.tsx            ← Layout principal
│   └── page.tsx              ← Página principal
│
├── components/               ← Todos los componentes
│   ├── Hero.tsx              ← Sección inicial (EDITAR AQUÍ)
│   ├── Projects.tsx          ← Tus proyectos (EDITAR AQUÍ)
│   ├── About.tsx             ← Tu biografía (EDITAR AQUÍ)
│   ├── Skills.tsx            ← Tus habilidades (EDITAR AQUÍ)
│   ├── Contact.tsx           ← Formulario de contacto
│   ├── Navbar.tsx            ← Navegación
│   └── Footer.tsx            ← Pie de página
│
└── tailwind.config.ts        ← Configuración de colores
```

---

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

### Semana 1: Personalización básica
- [ ] Añadir tu información personal
- [ ] Cargar 4 proyectos principales
- [ ] Actualizar skills
- [ ] Deploy inicial a Vercel

### Semana 2: Contenido
- [ ] Añadir imágenes de calidad a proyectos
- [ ] Mejorar descripciones de proyectos
- [ ] Añadir tu foto profesional
- [ ] Escribir biografía detallada

### Semana 3: Optimización
- [ ] Conectar formulario de contacto real
- [ ] Añadir Google Analytics
- [ ] Optimizar imágenes
- [ ] Mejorar SEO

### Mes 2: Expansión
- [ ] Añadir blog (opcional)
- [ ] Testimonios de clientes
- [ ] Certificaciones
- [ ] Más proyectos

---

## 💡 TIPS PRO

1. **Actualiza regularmente**: Añade nuevos proyectos cada vez que completes uno

2. **Métricas**: Instala Google Analytics para ver quién visita tu portfolio

3. **SEO**: 
   - Usa buenos títulos en proyectos
   - Añade meta descriptions
   - Usa alt text en imágenes

4. **Performance**:
   - Optimiza imágenes antes de subirlas (usa TinyPNG)
   - Mantén las animaciones sutiles
   - Prueba en mobile regularmente

5. **Networking**:
   - Comparte en LinkedIn
   - Añade el link a tu GitHub profile
   - Usa en aplicaciones de trabajo

---

## 📞 RECURSOS ÚTILES

### Documentación
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Herramientas
- **Optimizar imágenes**: https://tinypng.com
- **Probar responsive**: Chrome DevTools (F12)
- **Generar paletas**: https://coolors.co
- **Iconos**: https://heroicons.com

### Deploy
- Vercel: https://vercel.com
- Netlify: https://netlify.com (alternativa)
- GitHub Pages: https://pages.github.com (alternativa)

---

## 🎉 ¡FELICIDADES!

Ya tienes un portfolio profesional listo para usar. Recuerda:

✨ **Tu portfolio es tu carta de presentación digital**
✨ **Manténlo actualizado con tus mejores proyectos**
✨ **El contenido es más importante que el diseño perfecto**
✨ **Comparte y promociona tu trabajo**

---

## 📧 SOPORTE

Si tienes dudas sobre el código o diseño:

1. Revisa el `README.md` para documentación completa
2. Consulta `DESIGN-GUIDE.md` para guías de diseño
3. Busca en la documentación de Next.js/Tailwind
4. Usa los recursos de la comunidad

---

**¡Mucha suerte con tu nuevo portfolio!** 🚀

Diseñado y desarrollado con ♥ para Brenda Quiroz Catalán
