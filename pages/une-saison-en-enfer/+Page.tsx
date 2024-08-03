import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import RimbaudUneSaisonEnEnferOriginal from './../../text/RimbaudUneSaisonEnEnfer/RimbaudUneSaisonEnEnferOriginal';
import RimbaudUneSaisonEnEnferToc from './../../text/RimbaudUneSaisonEnEnfer/RimbaudUneSaisonEnEnferToc';
import RimbaudUneSaisonEnEnfer1 from './../../text/RimbaudUneSaisonEnEnfer/RimbaudUneSaisonEnEnfer1';

const dataObject: PageClass = {
  id: 'RimbaudUneSaisonEnEnfer',
  pageTitle: 'Рембо, Одно лето в аду',
  pageDescription: '«Одно лето в аду» Рембо на французском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Стихи, Рембо, Одно лето в аду, Билингва, Параллельный, Перевод, Французский, Проклятые поэты',
  pageHeader: 'Рембо, Одно лето в аду',
  pageTranslator: 'Перевод M.П. Кудинова',

  translations: ['Перевод M.П. Кудинова'],
  translationsToc: [''],

  columnsRelation: 49,
  styleSpecial: 'none',

  isNumbered: false,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <RimbaudUneSaisonEnEnferOriginal />,
  TextToc: <RimbaudUneSaisonEnEnferToc />,
  0: <RimbaudUneSaisonEnEnfer1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
