import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import LaertiosPlatoOriginal from './../../text/LaertiosPlato/LaertiosPlatoOriginal';
import LaertiosPlatoNumbers from './../../text/LaertiosPlato/LaertiosPlatoNumbers';
import LaertiosPlato1 from './../../text/LaertiosPlato/LaertiosPlato1';

const dataObject: PageClass = {
  id: 'LaertiosPlato',
  pageTitle: 'Д. Лаэртский Кн. 3: Платон',
  pageDescription: 'Книга Д. Лаэртского о Платоне на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Лаэртский, Платон, Билингва, Биография, Параллельный, Перевод, Древнегреческий, Греческий',
  pageHeader: 'Д. Лаэртский Кн. 3: Платон',
  pageTranslator: 'Перевод М.Л. Гаспарова',

  translations: ['Перевод М.Л. Гаспарова'],
  translationsToc: [''],

  columnsRelation: 50,
  styleSpecial: { textIndent: '3% each-line' },

  isNumbered: true,
  isTocHidden: true,
  isJumpNeeded: false,

  hasContents: false,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <LaertiosPlatoOriginal />,
  TextNumbers: <LaertiosPlatoNumbers />,
  0: <LaertiosPlato1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
