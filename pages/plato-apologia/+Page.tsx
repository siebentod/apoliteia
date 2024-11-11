import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoApologiaOriginal from './../../text/PlatoApologia/PlatoApologiaOriginal';
import PlatoApologiaNumbers from './../../text/PlatoApologia/PlatoApologiaNumbers';
import PlatoApologia1 from './../../text/PlatoApologia/PlatoApologia1';

const dataObject: TData = {
  id: 'PlatoApologia',
  pageTitle: 'Апология, Платон',
  pageDescription: 'Апология Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Апология, Платон',
  translationsInHeader: ['Перевод М.С. Соловьева', 'Перевод W.R.M. Lamb'],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: TStyle = {
  columnsRelation: 48,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <PlatoApologiaOriginal />,
  TextNumbers: <PlatoApologiaNumbers />,
  0: <PlatoApologia1 />,
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
