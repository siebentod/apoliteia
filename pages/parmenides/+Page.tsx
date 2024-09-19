import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import ParmenidesOriginal from './../../text/Parmenides/ParmenidesOriginal';

import Parmenides1 from './../../text/Parmenides/Parmenides1';

const dataObject: dataClass = {
  id: 'Parmenides',
  pageTitle: 'Парменид, О природе',
  pageDescription: 'Поэма «О природе» Парменида на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Досократики, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, О природе',
  translationsInHeader: ['Перевод М.Л. Гаспарова'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: true,
  translationsAlign: null,
  hasFlags: false,
};
const styleObject: styleClass = {
  columnsRelation: 50,
  mainClass: 'mainNoBorders_wide',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: true,
};

const textObject = {
  TextOriginal: <ParmenidesOriginal />,
  0: <Parmenides1 />,
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
