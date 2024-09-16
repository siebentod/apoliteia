import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoIonOriginal from '../../_text/PlatoIon/PlatoIonOriginal.jsx';
import PlatoIonNumbers from '../../_text/PlatoIon/PlatoIonNumbers.jsx';
import PlatoIon1 from '../../_text/PlatoIon/PlatoIon1';

const dataObject: dataClass = {
  id: 'PlatoIon',
  pageTitle: 'Ион, Платон',
  pageDescription: 'Ион Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Ион, Платон',
  translationsInHeader: ['Перевод Я.М. Боровского', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoIonOriginal />,
  TextNumbers: <PlatoIonNumbers />,
  0: <PlatoIon1 />,
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
