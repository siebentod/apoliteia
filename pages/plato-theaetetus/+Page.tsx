import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoTheaetetusOriginal from './../../text/PlatoTheaetetus/PlatoTheaetetusOriginal';
import PlatoTheaetetusNumbers from './../../text/PlatoTheaetetus/PlatoTheaetetusNumbers';
import PlatoTheaetetus1 from './../../text/PlatoTheaetetus/PlatoTheaetetus1';

const dataObject: TData = {
  id: 'PlatoTheaetetus',
  pageTitle: 'Теэтет, Платон',
  pageDescription: '«Теэтет» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Теэтет, Платон',
  translationsInHeader: ['Перевод Т.В. Васильевой', 'Перевод Harold N. Fowler'],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],

  hasContents: true,
  translationsAlign: 'horizontal',
  hasFlags: true,
};

const styleObject: TStyle = {
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
