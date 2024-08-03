import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoGorgiasOriginal from './../../text/PlatoGorgias/PlatoGorgiasOriginal';
import PlatoGorgiasNumbers from './../../text/PlatoGorgias/PlatoGorgiasNumbers';
import PlatoGorgias1 from './../../text/PlatoGorgias/PlatoGorgias1';
import PlatoGorgias2 from './../../text/PlatoGorgias/PlatoGorgias2';

const dataObject: PageClass = {
  id: 'PlatoGorgias',
  pageTitle: 'Горгий, Платон',
  pageDescription: '«Горгий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Горгий, Платон',
  pageTranslator: 'Перевод С.П. Маркиша',

  translations: ['Перевод С.П. Маркиша', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoGorgiasOriginal />,
  TextNumbers: <PlatoGorgiasNumbers />,
  0: <PlatoGorgias1 />,
  1: <PlatoGorgias2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
