import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoTheaetetusOriginal from './../../text/PlatoTheaetetus/PlatoTheaetetusOriginal';
import PlatoTheaetetusNumbers from './../../text/PlatoTheaetetus/PlatoTheaetetusNumbers';
import PlatoTheaetetusToc from './../../text/PlatoTheaetetus/PlatoTheaetetusToc';
import PlatoTheaetetus1 from './../../text/PlatoTheaetetus/PlatoTheaetetus1';
import PlatoTheaetetus2 from './../../text/PlatoTheaetetus/PlatoTheaetetus2';

const dataObject: PageClass = {
  id: 'PlatoTheaetetus',
  pageTitle: 'Теэтет, Платон',
  pageDescription: '«Теэтет» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Теэтет, Платон',
  pageTranslator: 'Перевод Т.В. Васильевой',

  translations: ['Перевод Т.В. Васильевой', 'Перевод Harold N. Fowler'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 50,
  styleSpecial: false,

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: 'horizontal',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoTheaetetusOriginal />,
  TextNumbers: <PlatoTheaetetusNumbers />,
  TextToc: <PlatoTheaetetusToc />,
  0: <PlatoTheaetetus1 />,
  1: <PlatoTheaetetus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
