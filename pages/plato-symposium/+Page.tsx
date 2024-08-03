import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoSymposiumOriginal from './../../text/PlatoSymposium/PlatoSymposiumOriginal';
import PlatoSymposiumNumbers from './../../text/PlatoSymposium/PlatoSymposiumNumbers';
import PlatoSymposium1 from './../../text/PlatoSymposium/PlatoSymposium1';
import PlatoSymposium2 from './../../text/PlatoSymposium/PlatoSymposium2';

const dataObject: PageClass = {
  id: 'PlatoSymposium',
  pageTitle: 'Пир, Платон',
  pageDescription: '«Пир» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Пир, Платон',
  pageTranslator: 'Перевод С.К. Апта',

  translations: ['Перевод С.К. Апта', 'Перевод Harold N. Fowler'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 50,
  styleSpecial: 'angleToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: 'vertical',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoSymposiumOriginal />,
  TextNumbers: <PlatoSymposiumNumbers />,
  0: <PlatoSymposium1 />,
  1: <PlatoSymposium2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
