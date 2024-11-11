import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoGorgiasOriginal from './../../text/PlatoGorgias/PlatoGorgiasOriginal';
import PlatoGorgiasNumbers from './../../text/PlatoGorgias/PlatoGorgiasNumbers';
import PlatoGorgias1 from './../../text/PlatoGorgias/PlatoGorgias1';

const dataObject: TData = {
  id: 'PlatoGorgias',
  pageTitle: 'Горгий, Платон',
  pageDescription: '«Горгий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Горгий, Платон',
  translationsInHeader: ['Перевод С.П. Маркиша', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoGorgiasOriginal />,
  TextNumbers: <PlatoGorgiasNumbers />,
  0: <PlatoGorgias1 />,
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
