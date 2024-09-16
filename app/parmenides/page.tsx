import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import ParmenidesOriginal from '../_text/Parmenides/ParmenidesOriginal';

import Parmenides1 from '../_text/Parmenides/Parmenides1';

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
