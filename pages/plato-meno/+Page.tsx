import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoMenoOriginal from './../../text/PlatoMeno/PlatoMenoOriginal';
import PlatoMenoNumbers from './../../text/PlatoMeno/PlatoMenoNumbers';
import PlatoMeno1 from './../../text/PlatoMeno/PlatoMeno1';
import PlatoMeno2 from './../../text/PlatoMeno/PlatoMeno2';

const dataObject: PageClass = {
  id: 'PlatoMeno',
  pageTitle: 'Менон, Платон',
  pageDescription: '«Менон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Менон, Платон',
  pageTranslator: 'Перевод С.А. Ошерова',

  translations: ['Перевод С.А. Ошерова', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoMenoOriginal />,
  TextNumbers: <PlatoMenoNumbers />,
  0: <PlatoMeno1 />,
  1: <PlatoMeno2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
