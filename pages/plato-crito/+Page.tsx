import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoCritoOriginal from './../../text/PlatoCrito/PlatoCritoOriginal';
import PlatoCritoNumbers from './../../text/PlatoCrito/PlatoCritoNumbers';
import PlatoCrito1 from './../../text/PlatoCrito/PlatoCrito1';

const dataObject: TData = {
  id: 'PlatoCrito',
  pageTitle: 'Критон, Платон',
  pageDescription: '«Критон» Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Критон, Платон',
  translationsInHeader: ['Перевод М.С. Соловьева', 'Перевод Harold N. Fowler'],
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
  TextOriginal: <PlatoCritoOriginal />,
  TextNumbers: <PlatoCritoNumbers />,
  0: <PlatoCrito1 />,
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
