import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoCharmidesOriginal from './../../text/PlatoCharmides/PlatoCharmidesOriginal';
import PlatoCharmidesNumbers from './../../text/PlatoCharmides/PlatoCharmidesNumbers';
import PlatoCharmides1 from './../../text/PlatoCharmides/PlatoCharmides1';

const dataObject: TData = {
  id: 'PlatoCharmides',
  pageTitle: 'Хармид, Платон',
  pageDescription: 'Хармид Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Хармид, Платон',
  translationsInHeader: [
    'Перевод С.Я. Шейнман-Топштейн',
    'Перевод W.R.M. Lamb',
  ],
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
  TextOriginal: <PlatoCharmidesOriginal />,
  TextNumbers: <PlatoCharmidesNumbers />,
  0: <PlatoCharmides1 />,
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
