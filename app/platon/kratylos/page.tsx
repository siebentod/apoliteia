import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoCratylusOriginal from '../../_text/PlatoCratylus/PlatoCratylusOriginal.jsx';
import PlatoCratylusNumbers from '../../_text/PlatoCratylus/PlatoCratylusNumbers.jsx';
import PlatoCratylus1 from '../../_text/PlatoCratylus/PlatoCratylus1';

const dataObject: dataClass = {
  id: 'PlatoCratylus',
  pageTitle: 'Кратил, Платон',
  pageDescription: '«Кратил» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Кратил, Платон',
  translationsInHeader: ['Перевод Т.В. Васильевой', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoCratylusOriginal />,
  TextNumbers: <PlatoCratylusNumbers />,
  0: <PlatoCratylus1 />,
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
