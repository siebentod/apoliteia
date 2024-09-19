import { Helmet } from 'react-helmet';
import './home.scss';
import qrCode from './qrCode.png';
import LiCollapsible from '../../components/Toc/LiCollapsible';
import './spoiler.scss';

export default function Page() {
  return (
    <div id="home">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="home__header">
        <div className="TitleAndDescription">
          <h1>
            <a href="/">APOLITEIA</a>
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
          Поделиться чаем с библиотекарем
          {/* Подарить чай библиотекарю */}
          {/* Пожаловать библиотекарю чай */}
        </h2>
        <a href="https://pay.cloudtips.ru/p/573f6bb3">
          <img src={qrCode} style={{ width: '20dvw', height: '20dvw' }} />
          <p style={{ marginTop: '1px', marginBottom: '5px' }}>
            https://pay.cloudtips.ru/p/573f6bb3
          </p>
        </a>
        <LiCollapsible title="Прямой номер">
          <span>4276 1300 1766 7498</span>
        </LiCollapsible>
        <div className="blank"></div>
      </div>
      <footer>
        <a href="/">Home</a> | <a href="https://github.com/siebentod">Github</a>
      </footer>
    </div>
  );
}
