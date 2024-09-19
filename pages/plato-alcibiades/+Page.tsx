import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoAlcibiadesOriginal from './../../text/PlatoAlcibiades/PlatoAlcibiadesOriginal';
import PlatoAlcibiadesNumbers from './../../text/PlatoAlcibiades/PlatoAlcibiadesNumbers';
import PlatoAlcibiades1 from './../../text/PlatoAlcibiades/PlatoAlcibiades1';

const dataObject: dataClass = {
  id: 'PlatoAlcibiades',
  pageTitle: 'Алкивиад I, Платон',
  pageDescription: '«Алкивиад I» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Алкивиад I, Платон',
  translationsInHeader: [
    'С.Я. Шейнман-Топштейн',
    'Перевод Перевод W.R.M. Lamb',
  ],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: styleClass = {
  columnsRelation: 50,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <PlatoAlcibiadesOriginal />,
  TextNumbers: <PlatoAlcibiadesNumbers />,
  0: <PlatoAlcibiades1 />,
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
