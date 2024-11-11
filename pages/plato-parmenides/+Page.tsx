import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoParmenidesOriginal from './../../text/PlatoParmenides/PlatoParmenidesOriginal';
import PlatoParmenidesNumbers from './../../text/PlatoParmenides/PlatoParmenidesNumbers';
import PlatoParmenides1 from './../../text/PlatoParmenides/PlatoParmenides1';

const dataObject: TData = {
  id: 'PlatoParmenides',
  pageTitle: 'Парменид, Платон',
  pageDescription: '«Парменид» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, Платон',
  translationsInHeader: ['Перевод H.И. Томасова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoParmenidesOriginal />,
  TextNumbers: <PlatoParmenidesNumbers />,
  0: <PlatoParmenides1 />,
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
