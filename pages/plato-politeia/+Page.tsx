import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoPoliteiaOriginal from './../../text/PlatoPoliteia/PlatoPoliteiaOriginal';
import PlatoPoliteiaNumbers from './../../text/PlatoPoliteia/PlatoPoliteiaNumbers';
import PlatoPoliteiaToc from './../../text/PlatoPoliteia/PlatoPoliteiaToc';
import PlatoPoliteia1 from './../../text/PlatoPoliteia/PlatoPoliteia1';
import PlatoPoliteia2 from './../../text/PlatoPoliteia/PlatoPoliteia2';

const dataObject: PageClass = {
  id: 'PlatoPoliteia',
  pageTitle: 'Государство, Платон',
  pageDescription:
    '««Государство» на древнегреческом, русском и английском языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Платон, Государство',
  pageTranslator: 'Перевод А.Н. Егунова',

  translations: ['Перевод А.Н. Егунова', 'Перевод Paul Shorey'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 47,
  styleSpecial: false,

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: 'horizontal',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoPoliteiaOriginal />,
  TextNumbers: <PlatoPoliteiaNumbers />,
  TextToc: <PlatoPoliteiaToc />,
  0: <PlatoPoliteia1 />,
  1: <PlatoPoliteia2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
