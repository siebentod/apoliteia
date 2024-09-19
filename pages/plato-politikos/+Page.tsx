import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoPolitikosOriginal from './../../text/PlatoPolitikos/PlatoPolitikosOriginal';
import PlatoPolitikosNumbers from './../../text/PlatoPolitikos/PlatoPolitikosNumbers';
import PlatoPolitikos1 from './../../text/PlatoPolitikos/PlatoPolitikos1';

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
