import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoCritiasOriginal from './../../text/PlatoCritias/PlatoCritiasOriginal';
import PlatoCritiasNumbers from './../../text/PlatoCritias/PlatoCritiasNumbers';
import PlatoCritias1 from './../../text/PlatoCritias/PlatoCritias1';
import PlatoCritias2 from './../../text/PlatoCritias/PlatoCritias2';

const dataObject: PageClass = {
  id: 'PlatoCritias',
  pageTitle: 'Критий, Платон',
  pageDescription: '«Критий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критий, Платон',
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
  TextOriginal: <PlatoCritiasOriginal />,
  TextNumbers: <PlatoCritiasNumbers />,
  0: <PlatoCritias1 />,
  1: <PlatoCritias2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
