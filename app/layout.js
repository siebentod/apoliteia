import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: {
    template: '%s | Apoliteia',
    default: 'Apoliteia | Библиотека параллельных текстов',
  },
  description: 'Библиотека параллельных текстов',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="f166de87a9ccfa08" />
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
