import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoTimaeusOriginal from './../../text/PlatoTimaeus/PlatoTimaeusOriginal';
import PlatoTimaeusNumbers from './../../text/PlatoTimaeus/PlatoTimaeusNumbers';
import PlatoTimaeus1 from './../../text/PlatoTimaeus/PlatoTimaeus1';

const dataObject: TData = {
  id: 'PlatoTimaeus',
  pageTitle: 'Тимей, Платон',
  pageDescription: '«Тимей» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Тимей, Платон',
  translationsInHeader: ['Перевод С. Аверинцева', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoTimaeusOriginal />,
  TextNumbers: <PlatoTimaeusNumbers />,
  0: <PlatoTimaeus1 />,
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
