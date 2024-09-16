import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoPhaedrusOriginal from '../../_text/PlatoPhaedrus/PlatoPhaedrusOriginal.jsx';
import PlatoPhaedrusNumbers from '../../_text/PlatoPhaedrus/PlatoPhaedrusNumbers.jsx';
import PlatoPhaedrus1 from '../../_text/PlatoPhaedrus/PlatoPhaedrus1';

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

export const metadata = {
  title: dataObject.pageTitle,
  description: dataObject.pageDescription,
  keywords: dataObject.pageKeywords,
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
