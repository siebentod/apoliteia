import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoEuthyphroOriginal from './../../text/PlatoEuthyphro/PlatoEuthyphroOriginal';
import PlatoEuthyphroNumbers from './../../text/PlatoEuthyphro/PlatoEuthyphroNumbers';
import PlatoEuthyphro1 from './../../text/PlatoEuthyphro/PlatoEuthyphro1';

const dataObject: dataClass = {
  id: 'PlatoEuthyphro',
  pageTitle: 'Евтифрон, Платон',
  pageDescription: 'Евтифрон Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Евтифрон, Платон',
  translationsInHeader: [
    'Перевод С.Я. Шейнман-Топштейн',
    'Перевод W.R.M. Lamb',
  ],
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
  TextOriginal: <PlatoEuthyphroOriginal />,
  TextNumbers: <PlatoEuthyphroNumbers />,
  0: <PlatoEuthyphro1 />,
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
