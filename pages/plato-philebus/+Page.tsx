import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoPhilebusOriginal from './../../text/PlatoPhilebus/PlatoPhilebusOriginal';
import PlatoPhilebusNumbers from './../../text/PlatoPhilebus/PlatoPhilebusNumbers';
import PlatoPhilebus1 from './../../text/PlatoPhilebus/PlatoPhilebus1';

const dataObject: dataClass = {
  id: 'PlatoPhilebus',
  pageTitle: 'Филеб, Платон',
  pageDescription: '«Филеб» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Филеб, Платон',
  translationsInHeader: ['Перевод H.В. Самсонова', 'Перевод Harold N. Fowler'],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: styleClass = {
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
