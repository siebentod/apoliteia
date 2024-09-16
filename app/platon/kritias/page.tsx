import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoCritiasOriginal from '../../_text/PlatoCritias/PlatoCritiasOriginal.jsx';
import PlatoCritiasNumbers from '../../_text/PlatoCritias/PlatoCritiasNumbers.jsx';
import PlatoCritias1 from '../../_text/PlatoCritias/PlatoCritias1';

const dataObject: dataClass = {
  id: 'PlatoCritias',
  pageTitle: 'Критий, Платон',
  pageDescription: '«Критий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критий, Платон',
  translationsInHeader: ['Перевод С. Аверинцева', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoCritiasOriginal />,
  TextNumbers: <PlatoCritiasNumbers />,
  0: <PlatoCritias1 />,
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
