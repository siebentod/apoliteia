import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoSophistesOriginal from '../../_text/PlatoSophistes/PlatoSophistesOriginal.jsx';
import PlatoSophistesNumbers from '../../_text/PlatoSophistes/PlatoSophistesNumbers.jsx';
import PlatoSophistes1 from '../../_text/PlatoSophistes/PlatoSophistes1';

const dataObject: dataClass = {
  id: 'PlatoSophistes',
  pageTitle: 'Софист, Платон',
  pageDescription: '«Софист» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Софист, Платон',
  translationsInHeader: ['Перевод С.А. Ананьина', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoSophistesOriginal />,
  TextNumbers: <PlatoSophistesNumbers />,
  0: <PlatoSophistes1 />,
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
