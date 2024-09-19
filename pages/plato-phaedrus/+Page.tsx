import React from 'react';
import PageComponent from '../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import PlatoPhaedrusOriginal from './../../text/PlatoPhaedrus/PlatoPhaedrusOriginal';
import PlatoPhaedrusNumbers from './../../text/PlatoPhaedrus/PlatoPhaedrusNumbers';
import PlatoPhaedrus1 from './../../text/PlatoPhaedrus/PlatoPhaedrus1';

const dataObject: dataClass = {
  id: 'PlatoPhaedrus',
  pageTitle: 'Федр, Платон',
  pageDescription: '«Федр» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Федр, Платон',
  translationsInHeader: ['Перевод А.Н. Егунова', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoPhaedrusOriginal />,
  TextNumbers: <PlatoPhaedrusNumbers />,
  0: <PlatoPhaedrus1 />,
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
