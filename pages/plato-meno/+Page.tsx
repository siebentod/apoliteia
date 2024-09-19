import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoMenoOriginal from './../../text/PlatoMeno/PlatoMenoOriginal';
import PlatoMenoNumbers from './../../text/PlatoMeno/PlatoMenoNumbers';
import PlatoMeno1 from './../../text/PlatoMeno/PlatoMeno1';

const dataObject: dataClass = {
  id: 'PlatoMeno',
  pageTitle: 'Менон, Платон',
  pageDescription: '«Менон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Менон, Платон',
  translationsInHeader: ['Перевод С.А. Ошерова', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoMenoOriginal />,
  TextNumbers: <PlatoMenoNumbers />,
  0: <PlatoMeno1 />,
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
