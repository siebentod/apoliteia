import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import RimbaudIlluminationsOriginal from './../../text/RimbaudIlluminations/RimbaudIlluminationsOriginal';
import RimbaudIlluminationsToc from './../../text/RimbaudIlluminations/RimbaudIlluminationsToc';
import RimbaudIlluminations1 from './../../text/RimbaudIlluminations/RimbaudIlluminations1';

const dataObject: PageClass = {
  id: 'RimbaudIlluminations',
  pageTitle: 'Рембо, Озарения',
  pageDescription: '«Озарения» Рембо на французском и русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Рембо, Озарения, Билингва, Параллельный, Перевод, Французский, Проклятые поэты',
  pageHeader: 'Рембо, Озарения',
  pageTranslator: 'Перевод M.П. Кудинова',

  translations: ['Перевод M.П. Кудинова'],
  translationsToc: [''],

  columnsRelation: 49,
  styleSpecial: 'noBorders',

  isNumbered: false,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <RimbaudIlluminationsOriginal />,
  TextToc: <RimbaudIlluminationsToc />,
  0: <RimbaudIlluminations1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
