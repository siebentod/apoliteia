import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import GayaScienzaOriginal from './../../text/GayaScienza/GayaScienzaOriginal';
import GayaScienza1 from './../../text/GayaScienza/GayaScienza1';

const dataObject: TData = {
  id: 'GayaScienza',
  pageTitle: 'Весёлая наука, Ф. Ницше',
  pageDescription: '«Весёлая наука» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Весёлая наука, Ф. Ницше',
  translationsInHeader: ['Перевод К.А. Свасьяна (1996)'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: 'collapsible',
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
  columnsRelation: 49,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <GayaScienzaOriginal />,
  0: <GayaScienza1 />,
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
