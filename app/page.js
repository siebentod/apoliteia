'use client';

import Link from 'next/link';
import { useState } from 'react';
import './_styles/home.scss';

export default function Page() {
  const [plato, setPlato] = useState(<TextChronology />);

  function handlePlatoButton(layout) {
    setPlato(layout);
  }

  return (
    <div id="home">
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
          <section>
            <ul className="links1">
              <li>
                <a href="/heraclitus">Гераклит, Фрагменты</a>
              </li>
              <li>
                <a href="/parmenides">Парменид, О природе</a>
              </li>
              <li>
                <a href="/aristotle-metaphysica">Аристотель, Метафизика</a>
              </li>
              <br />

              <li>
                <a href="/monadologie">Лейбниц, Монадология</a>
              </li>
              <li>
                <a href="/wer-denkt-abstract">Гегель, Кто мыслит абстрактно?</a>
              </li>
              <br />
              <li>
                <a href="/nietzsche/gaya-scienza">
                  Ницше, Веселая наука (1882, 1887)
                </a>
              </li>
              <li>
                <a href="/nietzsche/zarathustra">
                  Ницше, Так говорил Заратустра (1883-1885)
                </a>
              </li>
              <li>
                <a href="/nietzsche/jenseits-von-gut-und-boese">
                  Ницше, По ту сторону добра и зла (1886)
                </a>
              </li>
              <li>
                <a href="/nietzsche/goetzen-daemmerung">
                  Ницше, Сумерки идолов (1888)
                </a>
              </li>
              <br />

              <li>
                <a href="/ilias">Гомер, Илиада</a>
              </li>
              <li>
                <a href="/oedipus-tyrannos">Софокл, Царь Эдип</a>
              </li>
              <li>
                <a href="/horace">Гораций, Оды</a>
              </li>
              <br />
              <li>
                <a href="/levana">Де Квинси, Левана и Богородицы Скорби</a>
              </li>
              <li>
                <a href="/une-saison-en-enfer">Рембо, Одно лето в аду</a>
              </li>
              <li>
                <a href="/illuminations">Рембо, Озарения</a>
              </li>
              <li>
                <a href="/laertios-plato">Д. Лаэртский, Платон</a>
              </li>
            </ul>

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
              {plato}
            </div>
          </section>
        </div>
        <footer>
          <Link href="/about">About</Link> |{' '}
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
          <a href="/platon/apologia">Апология</a>
        </li>
        <li>
          <a href="/platon/kriton">Критон</a>
        </li>
        <li>
          <a href="/platon/charmides">Хармид</a>
        </li>
        <li>
          <a href="/platon/alkibiades">Алкивиад I</a>
        </li>
        <li>
          <a href="/platon/euthydemos">Евтидем</a>
        </li>
        <li>
          <a href="/platon/euthyphron">Евтифрон</a>
        </li>
        <li>[Гиппий Больший]</li>
        <li>Гиппий Меньший</li>
        <li>
          <a href="/platon/ion">Ион</a>
        </li>
        <li>Лахет</li>
        <li>Лисий</li>
        <li>Менексен</li>
        <li>
          <a href="/platon/kratylos">Кратил</a>
        </li>
        <li>
          <a href="/platon/gorgias">Горгий</a>
        </li>
      </ul>

      <ul style={{ gridColumn: 2 }}>
        <h3>II</h3>
        <li>
          <a href="/platon/menon">Менон</a>
        </li>
        <li>
          <a href="/platon/phaidon">Федон</a>
        </li>
        <li>
          <a href="/platon/protagoras">Протагор</a>
        </li>
        <li>
          <a href="/platon/symposion">Пир</a>
        </li>
        <li>
          <a href="/platon/phaidros">Федр</a>
        </li>
        <li>
          <a href="/platon/politeia">Государство</a>
        </li>
        <li>
          <a href="/platon/parmenides">Парменид</a>
        </li>
        <li style={{ marginBottom: '5px' }}>
          <a href="/platon/theaitetos">Теэтет</a>
        </li>
        <h3>III</h3>
        <li>
          <a href="/platon/sophistes">Софист</a>
        </li>
        <li>
          <a href="/platon/politikos">Политик</a>
        </li>
        <li>
          <a href="/platon/philebos">Филеб</a>
        </li>
        <li>
          <a href="/platon/timaios">Тимей</a>
        </li>
        <li>
          <a href="/platon/kritias">Критий</a>
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
        <a href="/platon/euthyphron">Евтифрон, или О благочестии</a>
      </li>
      <li>
        <a href="/platon/apologia">Апология Сократа</a>
      </li>
      <li>
        <a href="/platon/kriton">Критон, или О должном</a>
      </li>
      <li>
        <a href="/platon/phaidon">Федон, или О душе</a>
      </li>

      <h3>II</h3>
      <li>
        <a href="/platon/kratylos">Кратил, или О правильности имен</a>
      </li>
      <li>
        <a href="/platon/theaitetos">Теэтет, или О знании</a>
      </li>
      <li>
        <a href="/platon/sophistes">Софист, или О сущем</a>
      </li>
      <li>
        <a href="/platon/politikos">Политик, или о Царской власти</a>
      </li>

      <h3>III</h3>
      <li>
        <a href="/platon/parmenides">Парменид, или Об идеях</a>
      </li>
      <li>
        <a href="/platon/philebos">Филеб, или О наслаждении</a>
      </li>
      <li>
        <a href="/platon/symposion">Пир, или О благе</a>
      </li>
      <li>
        <a href="/platon/phaidros">Федр, или О любви</a>
      </li>

      <h3>IV</h3>
      <li>
        <a href="/platon/alkibiades">Алкивиад Первый</a>
      </li>
      <li>Алкивиад Второй, или О молитве</li>
      <li>Гиппарх, или Сребролюбец</li>
      <li>Соперники, или О философии</li>

      <h3 className="border-right">V</h3>
      <li className="border-right">Феаг, или О философии</li>
      <li className="border-right">
        <a href="/platon/charmides">Хармид, или Об умеренности</a>
      </li>
      <li className="border-right">Лахет, или О мужестве</li>
      <li className="border-right border-bottom left-bottom right-bottom">
        Лисий, или О дружбе
      </li>

      <h3 className="border-right right-top">VI</h3>
      <li className="border-right">
        <a href="/platon/euthydemos">Евфидем, или Спорщик</a>
      </li>
      <li className="border-right">
        <a href="/platon/protagoras">Протагор, или Софисты</a>
      </li>
      <li className="border-right">
        <a href="/platon/gorgias">Горгий, или О риторике</a>
      </li>
      <li className="border-right">
        <a href="/platon/menon">Менон, или О добродетели</a>
      </li>

      <h3 className="border-right">VII</h3>
      <li className="border-right">Гиппий первый или О прекрасном</li>
      <li className="border-right">Гиппий второй или О должном</li>
      <li className="border-right">
        <a href="/platon/ion">Ион, или об Илиаде</a>
      </li>
      <li className="border-right">Менексен, или Надгробное слово</li>

      <h3 className="border-right">VIII</h3>
      <li className="border-right">Клитофонт, или Вступление</li>
      <li className="border-right">
        <a href="/platon/politeia">Государство, или О справедливости</a>
      </li>
      <li className="border-right">
        <a href="/platon/timaios">Тимей, или О природе</a>
      </li>
      <li className="border-right">
        <a href="/platon/kritias">Критий, или Атлантида</a>
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
          <b>I.</b> <a href="/platon/alkibiades">Алкивиад I</a> – введение в
          философию, «о&nbsp;познании самого себя»
        </li>
        <li>
          <b>II.</b> <a href="/platon/gorgias">Горгий</a> и{' '}
          <a href="/platon/phaidon">Федон</a> – «этические» диалоги
        </li>
        <li>
          <b>III.</b> <a href="/platon/kratylos">Кратил</a> и{' '}
          <a href="/platon/theaitetos">Теэтет</a> – «логические»
        </li>
        <li>
          <b>IV.</b> <a href="/platon/sophistes">Софист</a> и{' '}
          <a href="/platon/politikos">Политик</a> – «физические»
        </li>
        <li>
          <b>V.</b> <a href="/platon/symposion">Пир</a> и{' '}
          <a href="/platon/phaidros">Федр</a> – «теологические»
        </li>
        <li>
          <b>VI.</b> <a href="/platon/timaios">Тимей</a> (о чувственном) и{' '}
          <a href="/platon/parmenides">Парменид</a> (о&nbsp;сверхчувственном)
        </li>
        <li>
          <b>VII.</b> <a href="/platon/philebos">Филеб</a> – о благе-первоначале
        </li>
      </ul>
    </div>
  );
}
