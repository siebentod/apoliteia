import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import AristotleMetaphysicaOriginal from './../../text/AristotleMetaphysica/AristotleMetaphysicaOriginal';
import AristotleMetaphysicaNumbers from './../../text/AristotleMetaphysica/AristotleMetaphysicaNumbers';

import AristotleMetaphysica1 from './../../text/AristotleMetaphysica/AristotleMetaphysica1';

const dataObject: TData = {
  id: 'AristotleMetaphysica',
  pageTitle: 'Метафизика, Аристотель',
  pageDescription:
    '«Метафизика» Аристотеля на греческом, русском и английском языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Метафизика, Аристотель, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Аристотель, Метафизика',
  translationsInHeader: [
    'Перевод А.В. Кубицкого (ред. М.И. Иткин, 1976)',
    'Перевод Hugh Tredennick',
  ],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],
  hasContents: 'collapsible',
  translationsAlign: 'horizontal',
  hasFlags: true,
};

const styleObject: TStyle = {
  columnsRelation: 41,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <AristotleMetaphysicaOriginal />,
  TextNumbers: <AristotleMetaphysicaNumbers />,

  0: <AristotleMetaphysica1 />,
};

function Page() {
  return (
    <PageComponent
      dataObject={dataObject}
      tocObject={tocObject}
      styleObject={styleObject}
      textObject={textObject}
    />
  );
}

export default Page;
