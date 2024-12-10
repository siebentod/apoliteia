import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import OpiumEaterOriginal from './../../text/OpiumEater/OpiumEaterOriginal';
import OpiumEater1 from './../../text/OpiumEater/OpiumEater1';

const dataObject: TData = {
  id: 'OpiumEater',
  pageTitle: 'Де Квинси, Исповедь англичанина, любителя опиума',
  pageDescription: '«Оды» Горация на латыни и на русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Латынь, Латинский, Рим',
  pageHeader: 'Де Квинси, Исповедь англичанина, любителя опиума',
  translationsInHeader: ['Перевод С. Сухарева'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: true,
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
  TextOriginal: <OpiumEaterOriginal />,
  0: <OpiumEater1 />,
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
