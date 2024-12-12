import { Helmet } from 'react-helmet';
import qrCode from './qrCode.png';
import './home.scss';
import '../../renderer/fonts.css';
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
        style={{ textAlign: 'center', marginTop: '20px' }}
      >
        <p className="mail">
          <a href="mailto:siebentod@mail.ru">siebentod@mail.ru</a>
        </p>
        <li className="collapsible">
          <label className="collapsibleItem">
            <input type="checkbox" />
            <span className="main-spoiler">
              Жертвоприношение
              {/* Подарить чай библиотекарю */}
              {/* Пожаловать библиотекарю чай */}
            </span>
          </label>
          <ul>
            <a href="https://pay.cloudtips.ru/p/573f6bb3" className="donate">
              <img src={qrCode} style={{ width: '20dvw', height: '20dvw' }} />
              <span className="donate__link">
                https://pay.cloudtips.ru/p/573f6bb3
              </span>
            </a>
            <li className="collapsible">
              <label className="collapsibleItem">
                <input type="checkbox" />
                <span
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  Прямой номер
                  {/* Подарить чай библиотекарю */}
                  {/* Пожаловать библиотекарю чай */}
                </span>
              </label>
              <ul>
                <span>4276 1300 1766 7498</span>
              </ul>
            </li>
          </ul>
        </li>

        <div className="blank"></div>
      </div>
      <footer>
        <a href="/">Home</a> | <a href="https://github.com/siebentod">Github</a>
      </footer>
    </div>
  );
}
