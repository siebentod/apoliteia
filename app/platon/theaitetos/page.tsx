import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoTheaetetusOriginal from '../../_text/PlatoTheaetetus/PlatoTheaetetusOriginal.jsx';
import PlatoTheaetetusNumbers from '../../_text/PlatoTheaetetus/PlatoTheaetetusNumbers.jsx';
import PlatoTheaetetus1 from '../../_text/PlatoTheaetetus/PlatoTheaetetus1';

const dataObject: dataClass = {
  id: 'PlatoTheaetetus',
  pageTitle: 'Теэтет, Платон',
  pageDescription: '«Теэтет» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Теэтет, Платон',
  translationsInHeader: ['Перевод Т.В. Васильевой', 'Перевод Harold N. Fowler'],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],

  hasContents: true,
  translationsAlign: 'horizontal',
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
  TextOriginal: <PlatoTheaetetusOriginal />,
  TextNumbers: <PlatoTheaetetusNumbers />,
  0: <PlatoTheaetetus1 />,
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
