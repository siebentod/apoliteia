import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './home.scss';
import './table.scss';
import '../../renderer/fonts.css';
import { pages } from './pages';
import HomeTable from './HomeTable';

export default function Page() {
  const [plato, setPlato] = useState(<TextChronology />);
  const [section, setSection] = useState('plato');

  function handlePlatoButton(layout) {
    setPlato(layout);
  }

  function handleSectionButton(section) {
    setSection(section);
  }

  return (
    <div id="home">
      <Helmet>
        <title>Apoliteia</title>
        <meta
          name="description"
          content="Библиотека параллельных переводов философских текстов"
        />
        <meta
          name="keywords"
          content="Библиотека, Философия, Поэзия, Билингвы"
        />
      </Helmet>

      <div className="home__header">
        <div className="TitleAndDescription">
          <h1>
            <a href="https://github.com/siebentod/apoliteia">APOLITEIA</a>
          </h1>
          <p>Библиотека параллельных текстов</p>
        </div>
      </div>
      <div className="home__container">
        <div className="home__main">
          <main>
            {/* <input placeholder="Поиск" /> */}
            <div id="sections__buttons">
              <button
                className={`${
                  section === 'plato' ? 'chosen' : null
                } buttonSection`}
                onClick={() => handleSectionButton('plato')}
              >
                Платон
              </button>
              <button
                className={`${
                  section === 'nietzsche' ? 'chosen' : null
                } buttonSection`}
                onClick={() => handleSectionButton('nietzsche')}
              >
                Ницше
              </button>
              <button
                className={`${
                  section === 'philosophie' ? 'chosen' : null
                } buttonSection`}
                onClick={() => handleSectionButton('philosophie')}
              >
                Др. Философия
              </button>
              <button
                className={`${
                  section === 'poesie' ? 'chosen' : null
                } buttonSection`}
                onClick={() => handleSectionButton('poesie')}
              >
                Поэзия
              </button>
            </div>
            {section === 'plato' ? (
              <div id="platoSection">
                <div id="platoSection__buttons">
                  <button
                    className={`${
                      plato.type === TextIamblichus ? 'chosen' : null
                    } buttonPlato`}
                    onClick={() => handlePlatoButton(<TextIamblichus />)}
                  >
                    «Канон Ямвлиха»
                  </button>
                  <button
                    className={`${
                      plato.type === TextChronology ? 'chosen' : null
                    } buttonPlato`}
                    onClick={() => handlePlatoButton(<TextChronology />)}
                  >
                    ~Хронология
                  </button>
                  <button
                    className={`${
                      plato.type === TextTetralogy && 'chosen'
                    } buttonPlato`}
                    onClick={() => handlePlatoButton(<TextTetralogy />)}
                  >
                    Тетралогии
                  </button>
                </div>
                <div id="platoSection__text">
                  {plato}
                  <div className="laertius">
                    <a href="/laertios-plato">Д. Лаэртский, Платон</a>
                  </div>
                </div>
              </div>
            ) : (
              <HomeTable section={section} pages={pages} />
            )}
          </main>
        </div>
        <footer>
          <a href="/about">About</a> |{' '}
          <a href="https://github.com/siebentod">Github</a>
        </footer>
      </div>
    </div>
  );
}

function TextChronology() {
  return (
    <div className="home__plato__layout">
      <div id="home__plato__chronology">
        <ul>
          <h3 className="border-left top-left">I</h3>
          <a href="/plato-apologia">
            <li>Апология</li>
          </a>
          <a href="/plato-crito">
            <li>Критон</li>
          </a>
          <a href="/plato-charmides">
            <li>Хармид</li>
          </a>
          <a href="/plato-alcibiades">
            <li>Алкивиад I</li>
          </a>
          <a href="/plato-euthydemus">
            <li>Евтидем</li>
          </a>
          <a href="/plato-euthyphro">
            <li>Евтифрон</li>
          </a>
          <li>[Гиппий Больший]</li>
          <li>Гиппий Меньший</li>
          <a href="/plato-ion">
            <li style={{ padding: '0.3dvh 0.3dvw' }}>Ион</li>
          </a>
          <li>Лахет</li>
          <li>Лисий</li>
          <li>Менексен</li>
          <a href="/plato-cratylus">
            <li>Кратил</li>
          </a>
          <a href="/plato-gorgias">
            <li className="bottom-left border-bottom">Горгий</li>
          </a>
        </ul>

        <ul style={{ gridColumn: 2 }}>
          <h3 className="border-left top-right">II</h3>
          <a href="/plato-meno">
            <li>Менон</li>
          </a>
          <a href="/plato-phaedo">
            <li>Федон</li>
          </a>
          <a href="/plato-protagoras">
            <li>Протагор</li>
          </a>
          <a href="/plato-symposium">
            <li>Пир</li>
          </a>
          <a href="/plato-phaedrus">
            <li>Федр</li>
          </a>
          <a href="/plato-politeia">
            <li>Государство</li>
          </a>
          <a href="/plato-parmenides">
            <li>Парменид</li>
          </a>
          <a href="/plato-theaetetus">
            <li>Теэтет</li>
          </a>
          <li
            className="pseudo-h3"
            style={{ backgroundColor: 'rgb(15,15,15)' }}
          >
            III
          </li>
          <a href="/plato-sophistes">
            <li>Софист</li>
          </a>
          <a href="/plato-politikos">
            <li>Политик</li>
          </a>
          <a href="/plato-philebus">
            <li>Филеб</li>
          </a>
          <a href="/plato-timaeus">
            <li>Тимей</li>
          </a>
          <a href="/plato-critias">
            <li>Критий</li>
          </a>
          <li className="border-bottom bottom-left bottom-right">Законы</li>
        </ul>
      </div>
    </div>
  );
}

function TextTetralogy() {
  return (
    <div className="home__plato__layout">
      <div id="home__plato__tetralogy">
        <h3 className="left-top border-top border-right">I</h3>
        <a href="/plato-euthyphro">
          <li className="border-top">Евтифрон, или О благочестии</li>
        </a>
        <a href="/plato-apologia">
          <li>Апология Сократа</li>
        </a>
        <a href="/plato-crito">
          <li>Критон, или О должном</li>
        </a>
        <a href="/plato-phaedo">
          <li>Федон, или О душе</li>
        </a>

        <h3 className="border-right">II</h3>
        <a href="/plato-cratylus">
          <li className="border-top">Кратил, или О правильности имен</li>
        </a>
        <a href="/plato-theaetetus">
          <li>Теэтет, или О знании</li>
        </a>
        <a href="/plato-sophistes">
          <li>Софист, или О сущем</li>
        </a>
        <a href="/plato-politikos">
          <li>Политик, или о Царской власти</li>
        </a>

        <h3 className="border-right">III</h3>
        <a href="/plato-parmenides">
          <li className="border-top">Парменид, или Об идеях</li>
        </a>
        <a href="/plato-philebus">
          <li>Филеб, или О наслаждении</li>
        </a>
        <a href="/plato-symposium">
          <li>Пир, или О благе</li>
        </a>
        <a href="/plato-phaedrus">
          <li>Федр, или О любви</li>
        </a>

        <h3 className="border-right">IV</h3>
        <a href="/plato-alcibiades">
          <li className="border-top">Алкивиад Первый</li>
        </a>
        <li>Алкивиад Второй, или О молитве</li>
        <li>Гиппарх, или Сребролюбец</li>
        <li>Соперники, или О философии</li>

        <h3 className="border-right">V</h3>
        <li className="border-right border-top">Феаг, или О философии</li>
        <a href="/plato-charmides">
          <li className="border-right">Хармид, или Об умеренности</li>
        </a>
        <li className="border-right">Лахет, или О мужестве</li>
        <li className="border-right border-bottom left-bottom right-bottom">
          Лисий, или О дружбе
        </li>

        <h3 className="border-right border-top right-top">VI</h3>
        <a href="/plato-euthydemus">
          <li className="border-top border-right">Евфидем, или Спорщик</li>
        </a>
        <a href="/plato-protagoras">
          <li className="border-right">Протагор, или Софисты</li>
        </a>
        <a href="/plato-gorgias">
          <li className="border-right">Горгий, или О риторике</li>
        </a>
        <a href="/plato-meno">
          <li className="border-right">Менон, или О добродетели</li>
        </a>

        <h3 className="border-right">VII</h3>
        <li className="border-right border-top">
          Гиппий первый или О прекрасном
        </li>
        <li className="border-right">Гиппий второй или О должном</li>
        <a href="/plato-ion">
          <li className="border-right">Ион, или об Илиаде</li>
        </a>
        <li className="border-right">Менексен, или Надгробное слово</li>

        <h3 className="border-right">VIII</h3>
        <li className="border-right border-top">Клитофонт, или Вступление</li>
        <a href="/plato-politeia">
          <li className="border-right">Государство, или О справедливости</li>
        </a>
        <a href="/plato-timaeus">
          <li className="border-right">Тимей, или О природе</li>
        </a>
        <a href="/plato-critias">
          <li className="border-right">Критий, или Атлантида</li>
        </a>

        <h3 className="border-right">IX</h3>
        <li className="border-right border-top">Минос, или О законе</li>
        <li className="border-right">Законы, или О законодательстве</li>
        <li className="border-right">
          Послезаконие, или Ночной совет, или Философ
        </li>
        <li className="border-right border-bottom right-bottom">
          Тринадцать Писем
        </li>
      </div>
    </div>
  );
}

function TextIamblichus() {
  return (
    <div className="home__plato__layout">
      <div id="home__plato__iamblichus">
        <ul>
          <li>
            <b>I.</b> <a href="/plato-alcibiades">Алкивиад I</a> – введение в
            философию, «о&nbsp;познании самого себя»
          </li>
          <li>
            <b>II.</b> <a href="/plato-gorgias">Горгий</a> и{' '}
            <a href="/plato-phaedo">Федон</a> – «этические» диалоги
          </li>
          <li>
            <b>III.</b> <a href="/plato-cratylus">Кратил</a> и{' '}
            <a href="/plato-theaetetus">Теэтет</a> – «логические»
          </li>
          <li>
            <b>IV.</b> <a href="/plato-sophistes">Софист</a> и{' '}
            <a href="/plato-politikos">Политик</a> – «физические»
          </li>
          <li>
            <b>V.</b> <a href="/plato-symposium">Пир</a> и{' '}
            <a href="/plato-phaedrus">Федр</a> – «теологические»
          </li>
          <li>
            <b>VI.</b> <a href="/plato-timaeus">Тимей</a> (о чувственном) и{' '}
            <a href="/plato-parmenides">Парменид</a> (о&nbsp;сверхчувственном)
          </li>
          <li>
            <b>VII.</b> <a href="/plato-philebus">Филеб</a> – о
            благе-первоначале
          </li>
        </ul>
      </div>
    </div>
  );
}
