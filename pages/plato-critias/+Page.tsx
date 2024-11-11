import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoCritiasOriginal from './../../text/PlatoCritias/PlatoCritiasOriginal';
import PlatoCritiasNumbers from './../../text/PlatoCritias/PlatoCritiasNumbers';
import PlatoCritias1 from './../../text/PlatoCritias/PlatoCritias1';

const dataObject: TData = {
  id: 'PlatoCritias',
  pageTitle: 'Критий, Платон',
  pageDescription: '«Критий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критий, Платон',
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
  TextOriginal: <PlatoCritiasOriginal />,
  TextNumbers: <PlatoCritiasNumbers />,
  0: <PlatoCritias1 />,
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
