export const metadata = {
  title: {
    template: '%s | Apoliteia',
    default: 'Apoliteia | Библиотека параллельных текстов',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
