export { Page };

import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import HeraclitusOriginal from './../../text/Heraclitus/HeraclitusOriginal';
import HeraclitusNumbers from './../../text/Heraclitus/HeraclitusNumbers';
import Heraclitus1 from './../../text/Heraclitus/Heraclitus1';
import Heraclitus2 from './../../text/Heraclitus/Heraclitus2';
import Heraclitus3 from './../../text/Heraclitus/Heraclitus3';
import Heraclitus4 from './../../text/Heraclitus/Heraclitus4';

const dataObject: PageClass = {
  id: 'Heraclitus',
  pageTitle: 'Гераклит, Фрагменты',
  pageDescription: 'Фрагменты Гераклита в нескольких переводах и в оригинале',
  pageKeywords:
    'Читать, Оригинал, Текст, Гераклит, Билингва, Параллельный, Досократики, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Гераклит, Фрагменты',
  pageTranslator: 'Перевод А.В. Лебедева (1989)',

  translations: [
    'Перевод А.В. Лебедева (1989)',
    'Перевод А.В. Лебедева (2014)',
    'Перевод А.О. Маковельского',
    'Перевод М.А. Дынника',
  ],
  translationsToc: [
    'Перевод Лебедева 1989',
    'Перевод Лебедева 2014',
    'Перевод Маковельского',
    'Перевод Дынника',
  ],

  columnsRelation: 45,
  styleSpecial: 'smallToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: true,

  hasContents: false,
  translationType: 'vertical',
  flags: false,
};

const textObject = {
  TextOriginal: <HeraclitusOriginal />,
  TextNumbers: <HeraclitusNumbers />,
  0: <Heraclitus1 />,
  1: <Heraclitus2 />,
  2: <Heraclitus3 />,
  3: <Heraclitus4 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}
