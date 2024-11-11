import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoIonOriginal from './../../text/PlatoIon/PlatoIonOriginal';
import PlatoIonNumbers from './../../text/PlatoIon/PlatoIonNumbers';
import PlatoIon1 from './../../text/PlatoIon/PlatoIon1';

const dataObject: TData = {
  id: 'PlatoIon',
  pageTitle: 'Ион, Платон',
  pageDescription: 'Ион Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Ион, Платон',
  translationsInHeader: ['Перевод Я.М. Боровского', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoIonOriginal />,
  TextNumbers: <PlatoIonNumbers />,
  0: <PlatoIon1 />,
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
