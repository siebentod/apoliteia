import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoPhaedoOriginal from '../../_text/PlatoPhaedo/PlatoPhaedoOriginal.jsx';
import PlatoPhaedoNumbers from '../../_text/PlatoPhaedo/PlatoPhaedoNumbers.jsx';
import PlatoPhaedo1 from '../../_text/PlatoPhaedo/PlatoPhaedo1';

const dataObject: dataClass = {
  id: 'PlatoPhaedo',
  pageTitle: 'Федон, Платон',
  pageDescription: '«Федон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Федон, Платон',
  translationsInHeader: ['Перевод С.П. Маркиша', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoPhaedoOriginal />,
  TextNumbers: <PlatoPhaedoNumbers />,
  0: <PlatoPhaedo1 />,
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
