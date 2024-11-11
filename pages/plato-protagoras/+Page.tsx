import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoProtagorasOriginal from './../../text/PlatoProtagoras/PlatoProtagorasOriginal';
import PlatoProtagorasNumbers from './../../text/PlatoProtagoras/PlatoProtagorasNumbers';
import PlatoProtagoras1 from './../../text/PlatoProtagoras/PlatoProtagoras1';

const dataObject: TData = {
  id: 'PlatoProtagoras',
  pageTitle: 'Протагор, Платон',
  pageDescription: 'Протагор Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Протагор, Платон',
  translationsInHeader: ['Перевод Вл.С. Соловьева', 'Перевод W.R.M. Lamb'],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: TStyle = {
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
