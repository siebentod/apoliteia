import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoSophistesOriginal from './../../text/PlatoSophistes/PlatoSophistesOriginal';
import PlatoSophistesNumbers from './../../text/PlatoSophistes/PlatoSophistesNumbers';
import PlatoSophistes1 from './../../text/PlatoSophistes/PlatoSophistes1';
import PlatoSophistes2 from './../../text/PlatoSophistes/PlatoSophistes2';

const dataObject: PageClass = {
  id: 'PlatoSophistes',
  pageTitle: 'Софист, Платон',
  pageDescription: '«Софист» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Софист, Платон',
  pageTranslator: 'Перевод С.А. Ананьина',

  translations: ['Перевод С.А. Ананьина', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoSophistesOriginal />,
  TextNumbers: <PlatoSophistesNumbers />,
  0: <PlatoSophistes1 />,
  1: <PlatoSophistes2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
