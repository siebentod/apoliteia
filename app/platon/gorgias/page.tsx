import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoGorgiasOriginal from '../../_text/PlatoGorgias/PlatoGorgiasOriginal.jsx';
import PlatoGorgiasNumbers from '../../_text/PlatoGorgias/PlatoGorgiasNumbers.jsx';
import PlatoGorgias1 from '../../_text/PlatoGorgias/PlatoGorgias1';

const dataObject: dataClass = {
  id: 'PlatoGorgias',
  pageTitle: 'Горгий, Платон',
  pageDescription: '«Горгий» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Горгий, Платон',
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
  TextOriginal: <PlatoGorgiasOriginal />,
  TextNumbers: <PlatoGorgiasNumbers />,
  0: <PlatoGorgias1 />,
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
