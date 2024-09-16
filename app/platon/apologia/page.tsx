import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoApologiaOriginal from '../../_text/PlatoApologia/PlatoApologiaOriginal.jsx';
import PlatoApologiaNumbers from '../../_text/PlatoApologia/PlatoApologiaNumbers.jsx';
import PlatoApologia1 from '../../_text/PlatoApologia/PlatoApologia1';

const dataObject: dataClass = {
  id: 'PlatoApologia',
  pageTitle: 'Апология, Платон',
  pageDescription: 'Апология Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Апология, Платон',
  translationsInHeader: ['Перевод М.С. Соловьева', 'Перевод W.R.M. Lamb'],
};

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: styleClass = {
  columnsRelation: 48,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <PlatoApologiaOriginal />,
  TextNumbers: <PlatoApologiaNumbers />,
  0: <PlatoApologia1 />,
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
