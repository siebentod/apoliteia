import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoProtagorasOriginal from '../../_text/PlatoProtagoras/PlatoProtagorasOriginal.jsx';
import PlatoProtagorasNumbers from '../../_text/PlatoProtagoras/PlatoProtagorasNumbers.jsx';
import PlatoProtagoras1 from '../../_text/PlatoProtagoras/PlatoProtagoras1';

const dataObject: dataClass = {
  id: 'PlatoProtagoras',
  pageTitle: 'Протагор, Платон',
  pageDescription: 'Протагор Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Протагор, Платон',
  translationsInHeader: ['Перевод Вл.С. Соловьева', 'Перевод W.R.M. Lamb'],
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
  TextOriginal: <PlatoProtagorasOriginal />,
  TextNumbers: <PlatoProtagorasNumbers />,
  0: <PlatoProtagoras1 />,
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
