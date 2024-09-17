/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/zarathustra',
        destination: '/nietzsche/zarathustra',
        permanent: true, // 301 / 302
      },
      {
        source: '/gaya-scienza',
        destination: '/nietzsche/gaya-scienza',
        permanent: true,
      },
      {
        source: '/jenseits-von-gut-und-boese',
        destination: '/nietzsche/jenseits-von-gut-und-boese',
        permanent: true,
      },
      {
        source: '/goetzen-daemmerung',
        destination: '/nietzsche/goetzen-daemmerung',
        permanent: true,
      },
      {
        source: '/plato-alcibiades',
        destination: '/platon/alkibiades',
        permanent: true,
      },
      {
        source: '/plato-apologia',
        destination: '/platon/apologia',
        permanent: true,
      },
      {
        source: '/plato-charmides',
        destination: '/platon/charmides',
        permanent: true,
      },
      {
        source: '/plato-euthydemus',
        destination: '/platon/euthydemos',
        permanent: true,
      },
      {
        source: '/plato-euthyphro',
        destination: '/platon/euthyphron',
        permanent: true,
      },
      {
        source: '/plato-gorgias',
        destination: '/platon/gorgias',
        permanent: true,
      },
      {
        source: '/plato-ion',
        destination: '/platon/ion',
        permanent: true,
      },
      {
        source: '/plato-cratylus',
        destination: '/platon/kratylos',
        permanent: true,
      },
      {
        source: '/plato-critias',
        destination: '/platon/kritias',
        permanent: true,
      },
      {
        source: '/plato-crito',
        destination: '/platon/kriton',
        permanent: true,
      },
      {
        source: '/plato-meno',
        destination: '/platon/menon',
        permanent: true,
      },
      {
        source: '/plato-parmenides',
        destination: '/platon/parmenides',
        permanent: true,
      },
      {
        source: '/plato-phaedo',
        destination: '/platon/phaidon',
        permanent: true,
      },
      {
        source: '/plato-phaedrus',
        destination: '/platon/phaidros',
        permanent: true,
      },
      {
        source: '/plato-philebus',
        destination: '/platon/philebos',
        permanent: true,
      },
      {
        source: '/plato-politeia',
        destination: '/platon/politeia',
        permanent: true,
      },
      {
        source: '/plato-politikos',
        destination: '/platon/politikos',
        permanent: true,
      },
      {
        source: '/plato-protagoras',
        destination: '/platon/protagoras',
        permanent: true,
      },
      {
        source: '/plato-sophistes',
        destination: '/platon/sophistes',
        permanent: true,
      },
      {
        source: '/plato-symposium',
        destination: '/platon/symposion',
        permanent: true,
      },
      {
        source: '/plato-theaetetus',
        destination: '/platon/theaitetos',
        permanent: true,
      },
      {
        source: '/plato-timaeus',
        destination: '/platon/timaios',
        permanent: true,
      },
      {
        source: '/horace',
        destination: '/horatius',
        permanent: true,
      },
      {
        source: '/laertios-plato',
        destination: '/laertios-platon',
        permanent: true,
      },
      {
        source: '/heraclitus',
        destination: '/herakleitos',
        permanent: true,
      },
      {
        source: '/aristotle-metaphysica',
        destination: '/aristoteles-metaphysica',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
