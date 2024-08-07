import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import IliasOriginal from './../../text/Ilias/IliasOriginal';
import IliasToc from './../../text/Ilias/IliasToc';
import IliasNumbers from './../../text/Ilias/IliasNumbers';
import Ilias1 from './../../text/Ilias/Ilias1';
import Ilias2 from './../../text/Ilias/Ilias2';
import Ilias3 from './../../text/Ilias/Ilias3';
import Ilias4 from './../../text/Ilias/Ilias4';

const dataObject: PageClass = {
  id: 'Ilias',
  pageTitle: 'Гомер, Илиада',
  pageDescription: '«Илиада» Гомера на греческом и русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Рембо, Озарения, Билингва, Параллельный, Перевод, Французский, Проклятые поэты',
  pageHeader: 'Рембо, Озарения',
  pageTranslator: 'Перевод Н.И. Гнедича',

  translations: [
    'Перевод Н.И. Гнедича',
    'Перевод В.В. Вересаева',
    'Перевод Н.М. Минского',
    'Перевод А.А. Сальникова',
  ],
  translationsToc: [
    'Н.И. Гнедич',
    'В.В. Вересаев',
    'Н.М. Минский',
    'А.А. Сальников',
  ],

  columnsRelation: 42,
  styleSpecial: 'main0Borders',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: 'vertical',
  flags: false,
};

const textObject = {
  TextOriginal: <IliasOriginal />,
  TextToc: <IliasToc />,
  TextNumbers: <IliasNumbers />,
  0: <Ilias1 />,
  1: <Ilias2 />,
  2: <Ilias3 />,
  3: <Ilias4 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
