import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoPhaedoOriginal from './../../text/PlatoPhaedo/PlatoPhaedoOriginal';
import PlatoPhaedoNumbers from './../../text/PlatoPhaedo/PlatoPhaedoNumbers';
import PlatoPhaedo1 from './../../text/PlatoPhaedo/PlatoPhaedo1';

const dataObject: TData = {
  id: 'PlatoPhaedo',
  pageTitle: 'Федон, Платон',
  pageDescription: '«Федон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Федон, Платон',
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
  TextOriginal: <PlatoPhaedoOriginal />,
  TextNumbers: <PlatoPhaedoNumbers />,
  0: <PlatoPhaedo1 />,
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
