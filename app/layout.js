export const metadata = {
  title: {
    template: '%s | Apoliteia',
    default: 'Apoliteia | Библиотека параллельных текстов',
  },
  description: { default: 'Библиотека параллельных текстов' },
  'yandex-verification': '37b716297936c20a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
