import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoTimaeusOriginal from './../../text/PlatoTimaeus/PlatoTimaeusOriginal';
import PlatoTimaeusNumbers from './../../text/PlatoTimaeus/PlatoTimaeusNumbers';
import PlatoTimaeus1 from './../../text/PlatoTimaeus/PlatoTimaeus1';
import PlatoTimaeus2 from './../../text/PlatoTimaeus/PlatoTimaeus2';

const dataObject: PageClass = {
  id: 'PlatoTimaeus',
  pageTitle: 'Тимей, Платон',
  pageDescription: '«Тимей» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Тимей, Платон',
  pageTranslator: 'Перевод С. Аверинцева',

  translations: ['Перевод С. Аверинцева', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoTimaeusOriginal />,
  TextNumbers: <PlatoTimaeusNumbers />,
  0: <PlatoTimaeus1 />,
  1: <PlatoTimaeus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
