import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoPoliteiaOriginal from '../../_text/PlatoPoliteia/PlatoPoliteiaOriginal.jsx';
import PlatoPoliteiaNumbers from '../../_text/PlatoPoliteia/PlatoPoliteiaNumbers.jsx';

import PlatoPoliteia1 from '../../_text/PlatoPoliteia/PlatoPoliteia1';

const dataObject: dataClass = {
  id: 'PlatoPoliteia',
  pageTitle: 'Государство, Платон',
  pageDescription:
    '««Государство» на древнегреческом, русском и английском языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Платон, Государство',
  translationsInHeader: ['Перевод А.Н. Егунова', 'Перевод Paul Shorey'],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: true,
  translationsAlign: 'horizontal',
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
  TextOriginal: <PlatoPoliteiaOriginal />,
  TextNumbers: <PlatoPoliteiaNumbers />,
  0: <PlatoPoliteia1 />,
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
