import './about.scss';
import './spoiler.scss';
import LiCollapsible from '../_components/Toc/LiCollapsible';
import Link from 'next/link';

export const metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <div id="home">
      <div className="home__header">
        <div className="TitleAndDescription">
          <h1>
            <Link href="/">APOLITEIA</Link>
          </h1>
          <p>Библиотека параллельных текстов</p>
        </div>
      </div>
      <div
        className="home__main"
        style={{ textAlign: 'center', color: 'grey', marginTop: '20px' }}
      >
        <p>
          <a href="mailto:siebentod@mail.ru">siebentod@mail.ru</a>
        </p>
        <h2 style={{ color: 'white', marginBottom: '10px' }}>
          Жертвоприношение
          {/* Подарить чай библиотекарю */}
          {/* Пожаловать библиотекарю чай */}
        </h2>
        <a href="https://pay.cloudtips.ru/p/573f6bb3">
          <img
            src="/images/qrCode.png"
            style={{ width: '20dvw', height: '20dvw' }}
            alt="QR code"
          />
        </a>
        <p style={{ marginTop: '5px', marginBottom: '5px' }}>
          <a href="https://pay.cloudtips.ru/p/573f6bb3">
            https://pay.cloudtips.ru/p/573f6bb3
          </a>
        </p>
        <LiCollapsible title="Прямой номер">
          <span>4276 1300 1766 7498</span>
        </LiCollapsible>
        <div className="blank"></div>
      </div>
      <footer>
        <Link href="/">Home</Link> |{' '}
        <a href="https://github.com/siebentod">Github</a>
      </footer>
    </div>
  );
}
