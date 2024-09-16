import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import LaertiosPlatoOriginal from '../_text/LaertiosPlato/LaertiosPlatoOriginal';
import LaertiosPlatoNumbers from '../_text/LaertiosPlato/LaertiosPlatoNumbers';
import LaertiosPlato1 from '../_text/LaertiosPlato/LaertiosPlato1';

const dataObject: dataClass = {
  id: 'LaertiosPlato',
  pageTitle: 'Д. Лаэртский Кн. 3: Платон',
  pageDescription: 'Книга Д. Лаэртского о Платоне на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Лаэртский, Платон, Билингва, Биография, Параллельный, Перевод, Древнегреческий, Греческий',
  pageHeader: 'Д. Лаэртский Кн. 3: Платон',
  translationsInHeader: ['Перевод М.Л. Гаспарова'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 50,
  mainClass: null,
  mainStyle: { textIndent: '3% each-line' },
  isNumbered: true,
  isTocHidden: true,
};

const textObject = {
  TextOriginal: <LaertiosPlatoOriginal />,
  TextNumbers: <LaertiosPlatoNumbers />,
  0: <LaertiosPlato1 />,
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
