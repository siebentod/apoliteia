import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoPhaedoOriginal from './../../text/PlatoPhaedo/PlatoPhaedoOriginal';
import PlatoPhaedoNumbers from './../../text/PlatoPhaedo/PlatoPhaedoNumbers';
import PlatoPhaedo1 from './../../text/PlatoPhaedo/PlatoPhaedo1';
import PlatoPhaedo2 from './../../text/PlatoPhaedo/PlatoPhaedo2';

const dataObject: PageClass = {
  id: 'PlatoPhaedo',
  pageTitle: 'Федон, Платон',
  pageDescription: '«Федон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Федон, Платон',
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
  TextOriginal: <PlatoPhaedoOriginal />,
  TextNumbers: <PlatoPhaedoNumbers />,
  0: <PlatoPhaedo1 />,
  1: <PlatoPhaedo2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
