import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import HeraclitusOriginal from './../../text/Heraclitus/HeraclitusOriginal';
import HeraclitusNumbers from './../../text/Heraclitus/HeraclitusNumbers';
import Heraclitus1 from './../../text/Heraclitus/Heraclitus1';

const dataObject: dataClass = {
  id: 'Heraclitus',
  pageTitle: 'Гераклит, Фрагменты',
  pageDescription: 'Фрагменты Гераклита в нескольких переводах и в оригинале',
  pageKeywords:
    'Читать, Оригинал, Текст, Гераклит, Билингва, Параллельный, Досократики, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Гераклит, Фрагменты',
  translationsInHeader: [
    'Перевод А.В. Лебедева (1989)',
    'Перевод А.В. Лебедева (2014)',
    'Перевод А.О. Маковельского',
    'Перевод М.А. Дынника',
  ],
};

const tocObject: tocClass = {
  translationsInToc: [
    'Перевод Лебедева 1989',
    'Перевод Лебедева 2014',
    'Перевод Маковельского',
    'Перевод Дынника',
  ],
  hasContents: false,
  translationsAlign: 'brick',
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 45,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <HeraclitusOriginal />,
  TextNumbers: <HeraclitusNumbers />,
  0: <Heraclitus1 />,
};

function Page() {
  return (
    <PageComponent
      dataObject={dataObject}
      tocObject={tocObject}
      styleObject={styleObject}
      textObject={textObject}
    />
  );
}

export default Page;
