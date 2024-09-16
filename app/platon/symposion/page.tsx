import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoSymposiumOriginal from '../../_text/PlatoSymposium/PlatoSymposiumOriginal.jsx';
import PlatoSymposiumNumbers from '../../_text/PlatoSymposium/PlatoSymposiumNumbers.jsx';
import PlatoSymposium1 from '../../_text/PlatoSymposium/PlatoSymposium1.jsx';

const dataObject: dataClass = {
  id: 'PlatoSymposium',
  pageTitle: 'Пир, Платон',
  pageDescription: '«Пир» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Пир, Платон',
  translationsInHeader: ['Перевод С.К. Апта', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoSymposiumOriginal />,
  TextNumbers: <PlatoSymposiumNumbers />,
  0: <PlatoSymposium1 />,
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
