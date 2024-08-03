import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoParmenidesOriginal from './../../text/PlatoParmenides/PlatoParmenidesOriginal';
import PlatoParmenidesNumbers from './../../text/PlatoParmenides/PlatoParmenidesNumbers';
import PlatoParmenides1 from './../../text/PlatoParmenides/PlatoParmenides1';
import PlatoParmenides2 from './../../text/PlatoParmenides/PlatoParmenides2';

const dataObject: PageClass = {
  id: 'PlatoParmenides',
  pageTitle: 'Парменид, Платон',
  pageDescription: '«Парменид» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, Платон',
  pageTranslator: 'Перевод H.И. Томасова',

  translations: ['Перевод H.И. Томасова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoParmenidesOriginal />,
  TextNumbers: <PlatoParmenidesNumbers />,
  0: <PlatoParmenides1 />,
  1: <PlatoParmenides2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
