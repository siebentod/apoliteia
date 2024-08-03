import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoPhaedrusOriginal from './../../text/PlatoPhaedrus/PlatoPhaedrusOriginal';
import PlatoPhaedrusNumbers from './../../text/PlatoPhaedrus/PlatoPhaedrusNumbers';
import PlatoPhaedrus1 from './../../text/PlatoPhaedrus/PlatoPhaedrus1';
import PlatoPhaedrus2 from './../../text/PlatoPhaedrus/PlatoPhaedrus2';

const dataObject: PageClass = {
  id: 'PlatoPhaedrus',
  pageTitle: 'Федр, Платон',
  pageDescription: '«Федр» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Федр, Платон',
  pageTranslator: 'Перевод А.Н. Егунова',

  translations: ['Перевод А.Н. Егунова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoPhaedrusOriginal />,
  TextNumbers: <PlatoPhaedrusNumbers />,
  0: <PlatoPhaedrus1 />,
  1: <PlatoPhaedrus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
