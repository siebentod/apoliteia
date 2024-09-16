import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoCritoOriginal from '../../_text/PlatoCrito/PlatoCritoOriginal.jsx';
import PlatoCritoNumbers from '../../_text/PlatoCrito/PlatoCritoNumbers.jsx';
import PlatoCrito1 from '../../_text/PlatoCrito/PlatoCrito1';

const dataObject: dataClass = {
  id: 'PlatoCrito',
  pageTitle: 'Критон, Платон',
  pageDescription: '«Критон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критон, Платон',
  translationsInHeader: ['Перевод М.С. Соловьева', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoCritoOriginal />,
  TextNumbers: <PlatoCritoNumbers />,
  0: <PlatoCrito1 />,
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
