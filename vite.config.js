import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import Sitemap from 'vite-plugin-sitemap';

const dynamicRoutes = [
  '/aristotle-metaphysica',
  '/gaya-scienza',
  '/goetzen-daemmerung',
  '/heraclitus',
  '/horace',
  '/ilias',
  '/illuminations',
  '/index',
  '/jenseits-von-gut-und-boese',
  '/laertios-plato',
  '/levana',
  '/monadologie',
  '/oedipus-tyrannos',
  '/parmenides',
  '/plato-alcibiades',
  '/plato-apologia',
  '/plato-charmides',
  '/plato-cratylus',
  '/plato-critias',
  '/plato-crito',
  '/plato-euthydemus',
  '/plato-euthyphro',
  '/plato-gorgias',
  '/plato-ion',
  '/plato-meno',
  '/plato-parmenides',
  '/plato-phaedo',
  '/plato-phaedrus',
  '/plato-philebus',
  '/plato-politeia',
  '/plato-politikos',
  '/plato-protagoras',
  '/plato-sophistes',
  '/plato-symposium',
  '/plato-theaetetus',
  '/plato-timaeus',
  '/une-saison-en-enfer',
  '/wer-denkt-abstract',
  '/zarathustra',
];

export default {
  plugins: [
    react(),
    vike({ prerender: true }),
    Sitemap({
      hostname: 'https://apoliteia.vercel.app/',
      dynamicRoutes,
      outDir: './dist/client',
      generateRobotsTxt: true,
      robots: [
        {
          allow: '/',
          disallow: '/about',
          userAgent: '*',
        },
      ],
    }),
  ],
};

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import vike from 'vike/plugin';

// export default defineConfig(({}) => {
//   return {
//     plugins: [process.env.NODE_ENV !== 'storybook' && vike(), react()],
//   };
// });
