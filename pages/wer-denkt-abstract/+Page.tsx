import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import HegelWerDenktAbstractOriginal from './../../text/HegelWerDenktAbstract/HegelWerDenktAbstractOriginal';
import HegelWerDenktAbstract1 from './../../text/HegelWerDenktAbstract/HegelWerDenktAbstract1';

const dataObject: PageClass = {
  id: 'HegelWerDenktAbstract',
  pageTitle: 'Гегель, Кто мыслит абстрактно?',
  pageDescription: '«Кто мыслит абстрактно?» Гегеля на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Ильенков, Параллельный, Перевод, Немецкий, Билингва',
  pageHeader: 'Гегель, Кто мыслит абстрактно?',
  pageTranslator: 'Перевод Э.В. Ильенкова',

  translations: ['Перевод Э.В. Ильенкова'],
  translationsToc: [''],

  columnsRelation: 50,
  styleSpecial: 'center',

  isNumbered: false,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <HegelWerDenktAbstractOriginal />,
  0: <HegelWerDenktAbstract1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
