import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoParmenidesOriginal from '../../_text/PlatoParmenides/PlatoParmenidesOriginal.jsx';
import PlatoParmenidesNumbers from '../../_text/PlatoParmenides/PlatoParmenidesNumbers.jsx';
import PlatoParmenides1 from '../../_text/PlatoParmenides/PlatoParmenides1';

const dataObject: dataClass = {
  id: 'PlatoParmenides',
  pageTitle: 'Парменид, Платон',
  pageDescription: '«Парменид» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, Платон',
  translationsInHeader: ['Перевод H.И. Томасова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoParmenidesOriginal />,
  TextNumbers: <PlatoParmenidesNumbers />,
  0: <PlatoParmenides1 />,
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
