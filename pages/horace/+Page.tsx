import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import HoraceOriginal from './../../text/Horace/HoraceOriginal';

import Horace1 from './../../text/Horace/Horace1';

const dataObject: TData = {
  id: 'Horace',
  pageTitle: 'Гораций, Оды',
  pageDescription: '«Оды» Горация на латыни и на русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Латынь, Латинский, Рим',
  pageHeader: 'Гораций, Оды',
  translationsInHeader: ['Изд.: Собрание сочинений, СПб., 1993'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: 'collapsible',
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
  columnsRelation: 47,
  mainClass: 'mainVerses',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <HoraceOriginal />,

  0: <Horace1 />,
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
