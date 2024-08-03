import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import ZarathustraOriginal from './../../text/Zarathustra/ZarathustraOriginal';
import ZarathustraToc from './../../text/Zarathustra/ZarathustraToc';
import Zarathustra1 from './../../text/Zarathustra/Zarathustra1';
import Zarathustra2 from './../../text/Zarathustra/Zarathustra2';

const dataObject: PageClass = {
  id: 'Zarathustra',
  pageTitle: 'Так говорил Заратустра, Ф. Ницше',
  pageDescription:
    '«Так говорил Заратустра» Ницше на русском и немецком языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Заратустра, Ницше, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., Так говорил Заратустра',
  pageTranslator: 'Пер. Ю.М. Антоновского, правка К.А. Свасьяна (1990)',

  translations: [
    'Пер. Ю.М. Антоновского, правка К.А. Свасьяна (1990)',
    'Перевод Ю.М. Антоновского (изд. 2007)',
  ],
  translationsToc: ['Пер. 1990', 'Пер. 2007'],

  columnsRelation: 50,
  styleSpecial: false,

  isNumbered: false,
  isTocHidden: true,
  isJumpNeeded: true,

  hasContents: 'collapsible',
  translationType: 'horizontal',
  flags: false,
};

const textObject = {
  TextOriginal: <ZarathustraOriginal />,
  TextToc: <ZarathustraToc />,
  0: <Zarathustra1 />,
  1: <Zarathustra2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
