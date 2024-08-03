import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoCratylusOriginal from './../../text/PlatoCratylus/PlatoCratylusOriginal';
import PlatoCratylusNumbers from './../../text/PlatoCratylus/PlatoCratylusNumbers';
import PlatoCratylus1 from './../../text/PlatoCratylus/PlatoCratylus1';
import PlatoCratylus2 from './../../text/PlatoCratylus/PlatoCratylus2';

const dataObject: PageClass = {
  id: 'PlatoCratylus',
  pageTitle: 'Кратил, Платон',
  pageDescription: '«Кратил» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Кратил, Платон',
  pageTranslator: 'Перевод Т.В. Васильевой',

  translations: ['Перевод Т.В. Васильевой', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoCratylusOriginal />,
  TextNumbers: <PlatoCratylusNumbers />,
  0: <PlatoCratylus1 />,
  1: <PlatoCratylus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
