import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoMenoOriginal from '../../_text/PlatoMeno/PlatoMenoOriginal.jsx';
import PlatoMenoNumbers from '../../_text/PlatoMeno/PlatoMenoNumbers.jsx';
import PlatoMeno1 from '../../_text/PlatoMeno/PlatoMeno1';

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
