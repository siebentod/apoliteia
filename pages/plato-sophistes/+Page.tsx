import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoSophistesOriginal from './../../text/PlatoSophistes/PlatoSophistesOriginal';
import PlatoSophistesNumbers from './../../text/PlatoSophistes/PlatoSophistesNumbers';
import PlatoSophistes1 from './../../text/PlatoSophistes/PlatoSophistes1';

const dataObject: TData = {
  id: 'PlatoSophistes',
  pageTitle: 'Софист, Платон',
  pageDescription: '«Софист» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Софист, Платон',
  translationsInHeader: ['Перевод С.А. Ананьина', 'Перевод Harold N. Fowler'],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
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
  TextOriginal: <PlatoSophistesOriginal />,
  TextNumbers: <PlatoSophistesNumbers />,
  0: <PlatoSophistes1 />,
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
