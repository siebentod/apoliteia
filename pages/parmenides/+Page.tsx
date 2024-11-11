import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import ParmenidesOriginal from './../../text/Parmenides/ParmenidesOriginal';

import Parmenides1 from './../../text/Parmenides/Parmenides1';

const dataObject: TData = {
  id: 'Parmenides',
  pageTitle: 'Парменид, О природе',
  pageDescription: 'Поэма «О природе» Парменида на греческом и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Досократики, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Парменид, О природе',
  translationsInHeader: ['Перевод М.Л. Гаспарова'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: true,
  translationsAlign: null,
  hasFlags: false,
};
const styleObject: TStyle = {
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
