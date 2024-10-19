import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './home.scss';
import './table.scss';
import { pages } from './pages';

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
                } buttonPlato`}
                onClick={() => handleSectionButton('plato')}
              >
                Платон
              </button>
              <button
                className={`${
                  section === 'nietzsche' ? 'chosen' : null
                } buttonPlato`}
                onClick={() => handleSectionButton('nietzsche')}
              >
                Ницше
              </button>
              <button
                className={`${
                  section === 'philosophie' ? 'chosen' : null
                } buttonPlato`}
                onClick={() => handleSectionButton('philosophie')}
              >
                Др. Философия
              </button>
              <button
                className={`${
                  section === 'poesie' ? 'chosen' : null
                } buttonPlato`}
                onClick={() => handleSectionButton('poesie')}
              >
                Поэзия
              </button>
            </div>
            {section === 'plato' ? (
              <div id="platoSection">
                <a href="/laertios-plato" className="laertius">
                  Д. Лаэртский, Платон
                </a>
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
                {plato}
              </div>
            ) : (
              <div>
                <div className="table">
                  {pages.map((obj) => {
                    if (obj.class === section)
                      return (
                        <>
                          <span>
                            <div
                              className="author"
                              key={obj.author}
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              {obj.author}
                            </div>
                          </span>
                          <a className="title" href={obj.path} key={obj.title}>
                            {obj.title}
                          </a>
                          <span
                            className="year"
                            key={obj.year}
                            title={obj.year}
                          >
                            {obj.year}
                          </span>
                        </>
                      );
                  })}
                </div>
              </div>
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
    <div className="home__plato__chronology home__plato__layout">
      <ul>
        <h3>I</h3>
        <li>
          <a href="/plato-apologia">Апология</a>
        </li>
        <li>
          <a href="/plato-crito">Критон</a>
        </li>
        <li>
          <a href="/plato-charmides">Хармид</a>
        </li>
        <li>
          <a href="/plato-alcibiades">Алкивиад I</a>
        </li>
        <li>
          <a href="/plato-euthydemus">Евтидем</a>
        </li>
        <li>
          <a href="/plato-euthyphro">Евтифрон</a>
        </li>
        <li>[Гиппий Больший]</li>
        <li>Гиппий Меньший</li>
        <li>
          <a href="/plato-ion">Ион</a>
        </li>
        <li>Лахет</li>
        <li>Лисий</li>
        <li>Менексен</li>
        <li>
          <a href="/plato-cratylus">Кратил</a>
        </li>
        <li>
          <a href="/plato-gorgias">Горгий</a>
        </li>
      </ul>

      <ul style={{ gridColumn: 2 }}>
        <h3>II</h3>
        <li>
          <a href="/plato-meno">Менон</a>
        </li>
        <li>
          <a href="/plato-phaedo">Федон</a>
        </li>
        <li>
          <a href="/plato-protagoras">Протагор</a>
        </li>
        <li>
          <a href="/plato-symposium">Пир</a>
        </li>
        <li>
          <a href="/plato-phaedrus">Федр</a>
        </li>
        <li>
          <a href="/plato-politeia">Государство</a>
        </li>
        <li>
          <a href="/plato-parmenides">Парменид</a>
        </li>
        <li style={{ marginBottom: '5px' }}>
          <a href="/plato-theaetetus">Теэтет</a>
        </li>
        <h3>III</h3>
        <li>
          <a href="/plato-sophistes">Софист</a>
        </li>
        <li>
          <a href="/plato-politikos">Политик</a>
        </li>
        <li>
          <a href="/plato-philebus">Филеб</a>
        </li>
        <li>
          <a href="/plato-timaeus">Тимей</a>
        </li>
        <li>
          <a href="/plato-critias">Критий</a>
        </li>
        <li>Законы</li>
      </ul>
    </div>
  );
}

function TextTetralogy() {
  return (
    <div className="home__plato__tetralogy home__plato__layout">
      <h3 className="left-top">I</h3>
      <li>
        <a href="/plato-euthyphro">Евтифрон, или О благочестии</a>
      </li>
      <li>
        <a href="/plato-apologia">Апология Сократа</a>
      </li>
      <li>
        <a href="/plato-crito">Критон, или О должном</a>
      </li>
      <li>
        <a href="/plato-phaedo">Федон, или О душе</a>
      </li>

      <h3>II</h3>
      <li>
        <a href="/plato-cratylus">Кратил, или О правильности имен</a>
      </li>
      <li>
        <a href="/plato-theaetetus">Теэтет, или О знании</a>
      </li>
      <li>
        <a href="/plato-sophistes">Софист, или О сущем</a>
      </li>
      <li>
        <a href="/plato-politikos">Политик, или о Царской власти</a>
      </li>

      <h3>III</h3>
      <li>
        <a href="/plato-parmenides">Парменид, или Об идеях</a>
      </li>
      <li>
        <a href="/plato-philebus">Филеб, или О наслаждении</a>
      </li>
      <li>
        <a href="/plato-symposium">Пир, или О благе</a>
      </li>
      <li>
        <a href="/plato-phaedrus">Федр, или О любви</a>
      </li>

      <h3>IV</h3>
      <li>
        <a href="/plato-alcibiades">Алкивиад Первый</a>
      </li>
      <li>Алкивиад Второй, или О молитве</li>
      <li>Гиппарх, или Сребролюбец</li>
      <li>Соперники, или О философии</li>

      <h3 className="border-right">V</h3>
      <li className="border-right">Феаг, или О философии</li>
      <li className="border-right">
        <a href="/plato-charmides">Хармид, или Об умеренности</a>
      </li>
      <li className="border-right">Лахет, или О мужестве</li>
      <li className="border-right border-bottom left-bottom right-bottom">
        Лисий, или О дружбе
      </li>

      <h3 className="border-right right-top">VI</h3>
      <li className="border-right">
        <a href="/plato-euthydemus">Евфидем, или Спорщик</a>
      </li>
      <li className="border-right">
        <a href="/plato-protagoras">Протагор, или Софисты</a>
      </li>
      <li className="border-right">
        <a href="/plato-gorgias">Горгий, или О риторике</a>
      </li>
      <li className="border-right">
        <a href="/plato-meno">Менон, или О добродетели</a>
      </li>

      <h3 className="border-right">VII</h3>
      <li className="border-right">Гиппий первый или О прекрасном</li>
      <li className="border-right">Гиппий второй или О должном</li>
      <li className="border-right">
        <a href="/plato-ion">Ион, или об Илиаде</a>
      </li>
      <li className="border-right">Менексен, или Надгробное слово</li>

      <h3 className="border-right">VIII</h3>
      <li className="border-right">Клитофонт, или Вступление</li>
      <li className="border-right">
        <a href="/plato-politeia">Государство, или О справедливости</a>
      </li>
      <li className="border-right">
        <a href="/plato-timaeus">Тимей, или О природе</a>
      </li>
      <li className="border-right">
        <a href="/plato-critias">Критий, или Атлантида</a>
      </li>

      <h3 className="border-right">IX</h3>
      <li className="border-right">Минос, или О законе</li>
      <li className="border-right">Законы, или О законодательстве</li>
      <li className="border-right">
        Послезаконие, или Ночной совет, или Философ
      </li>
      <li className="border-right border-bottom right-bottom">
        Тринадцать Писем
      </li>
    </div>
  );
}

function TextIamblichus() {
  return (
    <div className="home__plato__iamblichus home__plato__layout">
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
          <b>VII.</b> <a href="/plato-philebus">Филеб</a> – о благе-первоначале
        </li>
      </ul>
    </div>
  );
}
