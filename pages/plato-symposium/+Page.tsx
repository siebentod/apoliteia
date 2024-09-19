import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoSymposiumOriginal from './../../text/PlatoSymposium/PlatoSymposiumOriginal';
import PlatoSymposiumNumbers from './../../text/PlatoSymposium/PlatoSymposiumNumbers';
import PlatoSymposium1 from './../../text/PlatoSymposium/PlatoSymposium1';

const dataObject: dataClass = {
  id: 'PlatoSymposium',
  pageTitle: 'Пир, Платон',
  pageDescription: '«Пир» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Пир, Платон',
  translationsInHeader: ['Перевод С.К. Апта', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoSymposiumOriginal />,
  TextNumbers: <PlatoSymposiumNumbers />,
  0: <PlatoSymposium1 />,
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
