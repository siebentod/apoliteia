import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoPolitikosOriginal from './../../text/PlatoPolitikos/PlatoPolitikosOriginal';
import PlatoPolitikosNumbers from './../../text/PlatoPolitikos/PlatoPolitikosNumbers';
import PlatoPolitikos1 from './../../text/PlatoPolitikos/PlatoPolitikos1';
import PlatoPolitikos2 from './../../text/PlatoPolitikos/PlatoPolitikos2';

const dataObject: PageClass = {
  id: 'PlatoPolitikos',
  pageTitle: 'Политик, Платон',
  pageDescription: '«Политик» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Политик, Платон',
  pageTranslator: 'Перевод С.Я. Шейнман-Топштейн',

  translations: ['Перевод С.Я. Шейнман-Топштейн', 'Перевод Harold N. Fowler'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 47,
  styleSpecial: 'angleToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: 'vertical',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoPolitikosOriginal />,
  TextNumbers: <PlatoPolitikosNumbers />,
  0: <PlatoPolitikos1 />,
  1: <PlatoPolitikos2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
