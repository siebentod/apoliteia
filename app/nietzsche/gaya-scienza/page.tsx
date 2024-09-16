import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import GayaScienzaOriginal from '../../_text/GayaScienza/GayaScienzaOriginal';
import GayaScienza1 from '../../_text/GayaScienza/GayaScienza1';

const dataObject: dataClass = {
  id: 'GayaScienza',
  pageTitle: 'Веселая наука, Ф. Ницше',
  pageDescription: '«Веселая наука» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Веселая наука, Ф. Ницше',
  translationsInHeader: ['Перевод К.А. Свасьяна (1996)'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: 'collapsible',
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 49,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <GayaScienzaOriginal />,
  0: <GayaScienza1 />,
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
