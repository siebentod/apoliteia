import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoCritoOriginal from './../../text/PlatoCrito/PlatoCritoOriginal';
import PlatoCritoNumbers from './../../text/PlatoCrito/PlatoCritoNumbers';
import PlatoCrito1 from './../../text/PlatoCrito/PlatoCrito1';
import PlatoCrito2 from './../../text/PlatoCrito/PlatoCrito2';

const dataObject: PageClass = {
  id: 'PlatoCrito',
  pageTitle: 'Критон, Платон',
  pageDescription: '«Критон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критон, Платон',
  pageTranslator: 'Перевод М.С. Соловьева',

  translations: ['Перевод М.С. Соловьева', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoCritoOriginal />,
  TextNumbers: <PlatoCritoNumbers />,
  0: <PlatoCrito1 />,
  1: <PlatoCrito2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
