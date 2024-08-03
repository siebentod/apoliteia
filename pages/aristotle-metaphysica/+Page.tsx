import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import AristotleMetaphysicaOriginal from './../../text/AristotleMetaphysica/AristotleMetaphysicaOriginal';
import AristotleMetaphysicaNumbers from './../../text/AristotleMetaphysica/AristotleMetaphysicaNumbers';
import AristotleMetaphysicaToc from './../../text/AristotleMetaphysica/AristotleMetaphysicaToc';
import AristotleMetaphysica1 from './../../text/AristotleMetaphysica/AristotleMetaphysica1';
import AristotleMetaphysica2 from './../../text/AristotleMetaphysica/AristotleMetaphysica2';

const dataObject: PageClass = {
  id: 'AristotleMetaphysica',
  pageTitle: 'Метафизика, Аристотель',
  pageDescription:
    '«Метафизика» Аристотеля на греческом, русском и английском языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Метафизика, Аристотель, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Аристотель, Метафизика',
  pageTranslator: 'Перевод А.В. Кубицкого (ред. М.И. Иткин, 1976)',

  translations: [
    'Перевод А.В. Кубицкого (ред. М.И. Иткин, 1976)',
    'Перевод Hugh Tredennick',
  ],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 41,
  styleSpecial: false,

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: 'collapsible',
  translationType: 'horizontal',
  flags: true,
};

const textObject = {
  TextOriginal: <AristotleMetaphysicaOriginal />,
  TextNumbers: <AristotleMetaphysicaNumbers />,
  TextToc: <AristotleMetaphysicaToc />,
  0: <AristotleMetaphysica1 />,
  1: <AristotleMetaphysica2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
