import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import ParmenidesOriginal from './../../text/Parmenides/ParmenidesOriginal';
import ParmenidesToc from './../../text/Parmenides/ParmenidesToc';
import Parmenides1 from './../../text/Parmenides/Parmenides1';

const dataObject: PageClass = {
  id: 'LaertiosPlato',
  pageTitle: 'Парменид, О природе',
  pageDescription: 'Поэма «О природе» Парменида на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Досократики, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, О природе',
  pageTranslator: 'Перевод М.Л. Гаспарова',

  translations: ['Перевод М.Л. Гаспарова'],
  translationsToc: [''],

  columnsRelation: 50,
  styleSpecial: 'mainNoBorders_wide smallToc',
  isNumbered: false,
  isTocHidden: true,
  isJumpNeeded: false,

  hasContents: true,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <ParmenidesOriginal />,
  TextToc: <ParmenidesToc />,
  0: <Parmenides1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
