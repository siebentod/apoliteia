import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoCharmidesOriginal from './../../text/PlatoCharmides/PlatoCharmidesOriginal';
import PlatoCharmidesNumbers from './../../text/PlatoCharmides/PlatoCharmidesNumbers';
import PlatoCharmides1 from './../../text/PlatoCharmides/PlatoCharmides1';
import PlatoCharmides2 from './../../text/PlatoCharmides/PlatoCharmides2';

const dataObject: PageClass = {
  id: 'PlatoCharmides',
  pageTitle: 'Хармид, Платон',
  pageDescription: 'Хармид Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Хармид, Платон',
  pageTranslator: 'Перевод С.Я. Шейнман-Топштейн',

  translations: ['Перевод С.Я. Шейнман-Топштейн', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoCharmidesOriginal />,
  TextNumbers: <PlatoCharmidesNumbers />,
  0: <PlatoCharmides1 />,
  1: <PlatoCharmides2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
