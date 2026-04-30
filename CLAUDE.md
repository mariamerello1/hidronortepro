# HidroNortePro

## Descripción
Sitio web institucional para empresa de manejo de agua. Sitio público para que clientes encuentren los servicios y contacten a la empresa.

## Stack
- **Framework:** Next.js
- **Estilos:** Tailwind CSS
- **Hosting:** Vercel
- ~~**Emails:** Resend~~ *(cancelado — se usa WhatsApp directo)*

## Servicios a mostrar
- Riego automatizado
- Bombeo solar sumergible
- Cañerías PEAD
- Mantenimiento

## Contacto
- Formulario de contacto
- Botón WhatsApp
- Email visible

## Decisiones importantes
- Todo gratuito, sin costos de infraestructura
- Sin panel interno por ahora (solo sitio público)

## Aprendizajes y errores

### Fase 1 — Inicialización del proyecto
- Fase 1 completada: Next.js 16 + Tailwind v4 + App Router + TypeScript inicializado correctamente
- El número de WhatsApp en `src/lib/constants.ts` es `5493875259286` (número real cargado)
- Estructura creada: Navbar, Footer, layout principal, página hero

### Fase 2 — Secciones de la página principal
- Fase 2 completada: secciones Hero, Servicios, Zonas, Por qué elegirnos y CTA construidas
- Cada sección vive en `src/components/sections/` y los datos en `src/lib/constants.ts`

### Fase 3 — Contenido real y ajustes visuales (en progreso)
- Logo real cargado en `public/images/logo-hidronorte.jpg` y aplicado en Navbar
- WhatsApp real configurado: `5493875259286` en `src/lib/constants.ts`
- Ajustes visuales aplicados: logo más grande en Navbar (`h-20`), botón WhatsApp removido del Navbar, mayúscula en "Profesionales" en el Hero

### Pendientes Fase 3
- Cargar email de contacto real cuando esté disponible (reemplazar placeholder en `src/lib/constants.ts`)
- Cargar fotos de obras reales en `public/images/`

### Decisiones de arquitectura
- **Formulario de contacto cancelado:** se elimina la integración con Resend y el formulario de contacto. WhatsApp es suficiente y más directo para los clientes de HidroNorte
- **Fase 4 cancelada:** la fase de formulario + email queda descartada
- **Próximo paso:** ir directo a Fase 5 — lanzamiento y publicación en Vercel

### Fase 3 — Mejoras adicionales y secciones nuevas
- Sección Equipo HidroNortePro: fotos circulares, números de WhatsApp clickeables y email `hidronortepro@gmail.com` agregados
- Sección Lorentz: carrusel automático con fade de 4 fotos cada 3 segundos, con puntitos de navegación
- Hero: animación de paths flotantes con framer-motion (`FloatingPaths`) en colores azules de la marca (`rgba(12,68,124,...)`)
- Hero: degradado suave (`h-24`, `transparent → #F5F7FA`) al final para transición sin corte con la sección siguiente
- Dependencias agregadas: `framer-motion`, `@radix-ui/react-slot`, `class-variance-authority`
- Email real cargado: `hidronortepro@gmail.com` en `src/lib/constants.ts` y en `EquipoSection` y `Footer`

### Pendientes post-fases
- Ajustes estéticos y de diseño
- **Fase 5 pendiente:** lanzamiento y publicación en Vercel cuando el cliente apruebe el sitio
