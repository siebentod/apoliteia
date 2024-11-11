import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoPhilebusOriginal from './../../text/PlatoPhilebus/PlatoPhilebusOriginal';
import PlatoPhilebusNumbers from './../../text/PlatoPhilebus/PlatoPhilebusNumbers';
import PlatoPhilebus1 from './../../text/PlatoPhilebus/PlatoPhilebus1';

const dataObject: TData = {
  id: 'PlatoPhilebus',
  pageTitle: 'Филеб, Платон',
  pageDescription: '«Филеб» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Филеб, Платон',
  translationsInHeader: ['Перевод H.В. Самсонова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoPhilebusOriginal />,
  TextNumbers: <PlatoPhilebusNumbers />,
  0: <PlatoPhilebus1 />,
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
