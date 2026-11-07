# Berlinas — landing de demostración

Landing page para un obrador de panadería de barrio **ficticio**, hecha con
[Astro](https://astro.build) y TypeScript. Datos, precios, dirección y opiniones
son inventados; el aviso de demo aparece en la parte superior de la página.

## Stack

- **Astro 7** (salida estática, sin framework de UI)
- **TypeScript** en los datos y en los scripts de cliente
- **Fraunces Variable** para la tipografía de titulares (Fontsource, autoalojada)
- **Karla Variable** para el texto (Fontsource, autoalojada)
- Fotografías de [Unsplash](https://unsplash.com) cargadas por URL
- Mapa embebido de OpenStreetMap (sin API key)

## Desarrollo local

```bash
npm install
npm run dev
```

La web queda en <http://localhost:4321/berlinas/> (la ruta base está configurada
para GitHub Pages).

Otros comandos:

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
npm run check     # comprobación de tipos y plantillas
```

## Despliegue en GitHub Pages

El proyecto ya está preparado para publicarse en
`https://glaseca.github.io/berlinas/`.

1. Crea el repositorio **`berlinas`** en tu cuenta `glaseca` (sin README, para
   que el primer push no choque).
2. Sube el proyecto:

   ```bash
   git init
   git add .
   git commit -m "Berlinas: landing de demostración"
   git branch -M main
   git remote add origin https://github.com/glaseca/berlinas.git
   git push -u origin main
   ```

3. En GitHub entra en **Settings → Pages** y, en *Build and deployment*,
   selecciona **Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` se encarga de compilar y publicar
   en cada push a `main`. En unos minutos estará en
   `https://glaseca.github.io/berlinas/`.

### Si cambias el nombre del repositorio o usas dominio propio

Edita `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://glaseca.github.io',
  base: '/berlinas',
});
```

- Otro nombre de repo: cambia `base` por `/<nuevo-repo>`.
- Dominio propio (por ejemplo `berlinas.es`): usa
  `site: 'https://berlinas.es'` y `base: '/'`.

## Dónde tocar el contenido

Casi todo el contenido editable está en **`src/data/site.ts`**: nombre,
dirección, teléfono, email, Instagram, horarios, productos, precios y reseñas.
Las secciones están separadas en componentes dentro de `src/components/`:

```
src/
├─ data/site.ts          # datos del negocio y productos
├─ layouts/Base.astro    # <head>, SEO, JSON-LD y animaciones de entrada
├─ pages/index.astro     # orden de las secciones
├─ components/
│  ├─ Disclaimer.astro   # faldón de "datos ficticios"
│  ├─ Header.astro
│  ├─ Hero.astro
│  ├─ Marquee.astro      # banda de keywords
│  ├─ Obrador.astro
│  ├─ Products.astro
│  ├─ Reviews.astro
│  ├─ Visit.astro        # mapa, dirección y horario
│  ├─ Encargos.astro     # formulario de pedidos
│  └─ Footer.astro
└─ styles/global.css     # tokens de color, tipografía y utilidades
```

## Formulario de contacto

Es una demo **sin servidor**: al enviar, el navegador abre la aplicación de
correo con el asunto y el cuerpo ya rellenados (`mailto:`). No se envía nada a
ningún servicio.

Para recibir pedidos de verdad, cambia el `submit` de
`src/components/Encargos.astro` por un servicio como Formspree, Netlify Forms o
una función serverless. Recuerda que GitHub Pages es solo estático.

## Notas

- El `<meta name="robots" content="noindex, nofollow">` está puesto a propósito
  para que un negocio inventado no aparezca en buscadores. Si quieres indexar la
  demo, bórralo en `src/layouts/Base.astro`.
- Las imágenes se cargan desde Unsplash. Para producción conviene descargarlas
  a `public/` y servirlas en local (más rápido y sin dependencia externa).
- La dirección, el teléfono y el email son inventados. El mapa apunta a la calle
  del Espíritu Santo de Madrid, pero el número de portal es ficticio.
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces) y
  [Karla](https://fonts.google.com/specimen/Karla), vía Fontsource.
- Fotografías: Unsplash (uso libre según su licencia).

Hecho con masa madre y TypeScript. Buen provecho.
