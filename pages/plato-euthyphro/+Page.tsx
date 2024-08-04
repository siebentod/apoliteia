import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoEuthyphroOriginal from './../../text/PlatoEuthyphro/PlatoEuthyphroOriginal';
import PlatoEuthyphroNumbers from './../../text/PlatoEuthyphro/PlatoEuthyphroNumbers';
import PlatoEuthyphro1 from './../../text/PlatoEuthyphro/PlatoEuthyphro1';
import PlatoEuthyphro2 from './../../text/PlatoEuthyphro/PlatoEuthyphro2';

const dataObject: PageClass = {
  id: 'PlatoEuthyphro',
  pageTitle: 'Евтифрон, Платон',
  pageDescription: 'Евтифрон Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Евтифрон, Платон',
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
  TextOriginal: <PlatoEuthyphroOriginal />,
  TextNumbers: <PlatoEuthyphroNumbers />,
  0: <PlatoEuthyphro1 />,
  1: <PlatoEuthyphro2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
