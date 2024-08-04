import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoApologiaOriginal from './../../text/PlatoApologia/PlatoApologiaOriginal';
import PlatoApologiaNumbers from './../../text/PlatoApologia/PlatoApologiaNumbers';
import PlatoApologia1 from './../../text/PlatoApologia/PlatoApologia1';
import PlatoApologia2 from './../../text/PlatoApologia/PlatoApologia2';

const dataObject: PageClass = {
  id: 'PlatoApologia',
  pageTitle: 'Апология, Платон',
  pageDescription: 'Апология Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Апология, Платон',
  pageTranslator: 'Перевод М.С. Соловьева',

  translations: ['Перевод М.С. Соловьева', 'Перевод W.R.M. Lamb'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 48,
  styleSpecial: 'angleToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: 'vertical',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoApologiaOriginal />,
  TextNumbers: <PlatoApologiaNumbers />,
  0: <PlatoApologia1 />,
  1: <PlatoApologia2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
