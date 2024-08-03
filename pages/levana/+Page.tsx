import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import LevanaOriginal from './../../text/Levana/LevanaOriginal';
import Levana1 from './../../text/Levana/Levana1';

const dataObject: PageClass = {
  id: 'Levana',
  pageTitle: 'Томас Де Квинси, Левана и Богородицы Скорби',
  pageDescription:
    '"Левана и Богородицы Скорби" Де Квинси на английском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Suspiria De Profundis, Параллельный, Перевод, Английский',
  pageHeader: 'Томас Де Квинси, Левана и Богородицы Скорби',
  pageTranslator: 'Перевод С.Л. Сухарева',

  translations: ['Перевод С.Л. Сухарева'],
  translationsToc: [''],

  columnsRelation: 46.6,
  styleSpecial: 'center',

  isNumbered: false,
  isTocHidden: true,
  isJumpNeeded: false,

  hasContents: false,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <LevanaOriginal />,
  0: <Levana1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
