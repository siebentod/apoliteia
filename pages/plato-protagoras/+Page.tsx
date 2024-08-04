import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoProtagorasOriginal from './../../text/PlatoProtagoras/PlatoProtagorasOriginal';
import PlatoProtagorasNumbers from './../../text/PlatoProtagoras/PlatoProtagorasNumbers';
import PlatoProtagoras1 from './../../text/PlatoProtagoras/PlatoProtagoras1';
import PlatoProtagoras2 from './../../text/PlatoProtagoras/PlatoProtagoras2';

const dataObject: PageClass = {
  id: 'PlatoProtagoras',
  pageTitle: 'Протагор, Платон',
  pageDescription: 'Протагор Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Протагор, Платон',
  pageTranslator: 'Перевод Вл.С. Соловьева',

  translations: ['Перевод Вл.С. Соловьева', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoProtagorasOriginal />,
  TextNumbers: <PlatoProtagorasNumbers />,
  0: <PlatoProtagoras1 />,
  1: <PlatoProtagoras2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
