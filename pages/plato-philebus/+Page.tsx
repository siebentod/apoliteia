import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoPhilebusOriginal from './../../text/PlatoPhilebus/PlatoPhilebusOriginal';
import PlatoPhilebusNumbers from './../../text/PlatoPhilebus/PlatoPhilebusNumbers';
import PlatoPhilebus1 from './../../text/PlatoPhilebus/PlatoPhilebus1';
import PlatoPhilebus2 from './../../text/PlatoPhilebus/PlatoPhilebus2';

const dataObject: PageClass = {
  id: 'PlatoPhilebus',
  pageTitle: 'Филеб, Платон',
  pageDescription: '«Филеб» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Филеб, Платон',
  pageTranslator: 'Перевод H.В. Самсонова',

  translations: ['Перевод H.В. Самсонова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoPhilebusOriginal />,
  TextNumbers: <PlatoPhilebusNumbers />,
  0: <PlatoPhilebus1 />,
  1: <PlatoPhilebus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
