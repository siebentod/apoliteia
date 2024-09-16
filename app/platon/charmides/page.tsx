import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoCharmidesOriginal from '../../_text/PlatoCharmides/PlatoCharmidesOriginal.jsx';
import PlatoCharmidesNumbers from '../../_text/PlatoCharmides/PlatoCharmidesNumbers.jsx';
import PlatoCharmides1 from '../../_text/PlatoCharmides/PlatoCharmides1';

const dataObject: dataClass = {
  id: 'PlatoCharmides',
  pageTitle: 'Хармид, Платон',
  pageDescription: 'Хармид Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Хармид, Платон',
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
  TextOriginal: <PlatoCharmidesOriginal />,
  TextNumbers: <PlatoCharmidesNumbers />,
  0: <PlatoCharmides1 />,
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
