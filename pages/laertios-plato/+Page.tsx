import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import LaertiosPlatoOriginal from './../../text/LaertiosPlato/LaertiosPlatoOriginal';
import LaertiosPlatoNumbers from './../../text/LaertiosPlato/LaertiosPlatoNumbers';
import LaertiosPlato1 from './../../text/LaertiosPlato/LaertiosPlato1';

const dataObject: TData = {
  id: 'LaertiosPlato',
  pageTitle: 'Д. Лаэртский Кн. 3: Платон',
  pageDescription: 'Книга Д. Лаэртского о Платоне на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Лаэртский, Платон, Билингва, Биография, Параллельный, Перевод, Древнегреческий, Греческий',
  pageHeader: 'Д. Лаэртский Кн. 3: Платон',
  translationsInHeader: ['Перевод М.Л. Гаспарова'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
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
