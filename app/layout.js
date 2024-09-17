export const metadata = {
  title: {
    template: '%s | Apoliteia',
    default: 'Apoliteia | Библиотека параллельных текстов',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="37b716297936c20a" />
      <body>{children}</body>
    </html>
  );
}
