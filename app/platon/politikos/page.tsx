import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoPolitikosOriginal from '../../_text/PlatoPolitikos/PlatoPolitikosOriginal.jsx';
import PlatoPolitikosNumbers from '../../_text/PlatoPolitikos/PlatoPolitikosNumbers.jsx';
import PlatoPolitikos1 from '../../_text/PlatoPolitikos/PlatoPolitikos1';

const dataObject: dataClass = {
  id: 'PlatoPolitikos',
  pageTitle: 'Политик, Платон',
  pageDescription: '«Политик» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Политик, Платон',
  translationsInHeader: [
    'Перевод С.Я. Шейнман-Топштейн',
    'Перевод Harold N. Fowler',
  ],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: styleClass = {
  columnsRelation: 47,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <PlatoPolitikosOriginal />,
  TextNumbers: <PlatoPolitikosNumbers />,
  0: <PlatoPolitikos1 />,
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
