import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import AristotleMetaphysicaOriginal from '../_text/AristotleMetaphysica/AristotleMetaphysicaOriginal';
import AristotleMetaphysicaNumbers from '../_text/AristotleMetaphysica/AristotleMetaphysicaNumbers';

import AristotleMetaphysica1 from '../_text/AristotleMetaphysica/AristotleMetaphysica1';

const dataObject: dataClass = {
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

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: 'collapsible',
  translationsAlign: 'horizontal',
  hasFlags: true,
};

const styleObject: styleClass = {
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

export const metadata = {
  title: dataObject.pageTitle,
  description: dataObject.pageDescription,
  keywords: dataObject.pageKeywords,
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
