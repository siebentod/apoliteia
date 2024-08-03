import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoAlcibiadesOriginal from './../../text/PlatoAlcibiades/PlatoAlcibiadesOriginal';
import PlatoAlcibiadesNumbers from './../../text/PlatoAlcibiades/PlatoAlcibiadesNumbers';
import PlatoAlcibiades1 from './../../text/PlatoAlcibiades/PlatoAlcibiades1';
import PlatoAlcibiades2 from './../../text/PlatoAlcibiades/PlatoAlcibiades2';

const dataObject: PageClass = {
  id: 'PlatoAlcibiades',
  pageTitle: 'Алкивиад I, Платон',
  pageDescription: '«Алкивиад I» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Алкивиад I, Платон',
  pageTranslator: 'С.Я. Шейнман-Топштейн',

  translations: ['С.Я. Шейнман-Топштейн', 'Перевод Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoAlcibiadesOriginal />,
  TextNumbers: <PlatoAlcibiadesNumbers />,
  0: <PlatoAlcibiades1 />,
  1: <PlatoAlcibiades2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
