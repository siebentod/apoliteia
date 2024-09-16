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
        source: '/alcibiades',
        destination: '/platon/alkibiades',
        permanent: true,
      },
      {
        source: '/apologia',
        destination: '/platon/apologia',
        permanent: true,
      },
      {
        source: '/charmides',
        destination: '/platon/charmides',
        permanent: true,
      },
      {
        source: '/euthydemus',
        destination: '/platon/euthydemos',
        permanent: true,
      },
      {
        source: '/euthyphro',
        destination: '/platon/euthyphron',
        permanent: true,
      },
      {
        source: '/gorgias',
        destination: '/platon/gorgias',
        permanent: true,
      },
      {
        source: '/ion',
        destination: '/platon/ion',
        permanent: true,
      },
      {
        source: '/cratylus',
        destination: '/platon/kratylos',
        permanent: true,
      },
      {
        source: '/critias',
        destination: '/platon/kritias',
        permanent: true,
      },
      {
        source: '/crito',
        destination: '/platon/kriton',
        permanent: true,
      },
      {
        source: '/meno',
        destination: '/platon/menon',
        permanent: true,
      },
      {
        source: '/parmenides',
        destination: '/platon/parmenides',
        permanent: true,
      },
      {
        source: '/phaedo',
        destination: '/platon/phaidon',
        permanent: true,
      },
      {
        source: '/phaedrus',
        destination: '/platon/phaidros',
        permanent: true,
      },
      {
        source: '/philebus',
        destination: '/platon/philebos',
        permanent: true,
      },
      {
        source: '/politeia',
        destination: '/platon/politeia',
        permanent: true,
      },
      {
        source: '/politikos',
        destination: '/platon/politikos',
        permanent: true,
      },
      {
        source: '/protagoras',
        destination: '/platon/protagoras',
        permanent: true,
      },
      {
        source: '/sophistes',
        destination: '/platon/sophistes',
        permanent: true,
      },
      {
        source: '/symposium',
        destination: '/platon/symposion',
        permanent: true,
      },
      {
        source: '/theaetetus',
        destination: '/platon/theaitetos',
        permanent: true,
      },
      {
        source: '/timaeus',
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
