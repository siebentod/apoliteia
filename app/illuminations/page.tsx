import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import RimbaudIlluminationsOriginal from '../_text/RimbaudIlluminations/RimbaudIlluminationsOriginal';

import RimbaudIlluminations1 from '../_text/RimbaudIlluminations/RimbaudIlluminations1';

const dataObject: dataClass = {
  id: 'RimbaudIlluminations',
  pageTitle: 'Рембо, Озарения',
  pageDescription: '«Озарения» Рембо на французском и русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Рембо, Озарения, Билингва, Параллельный, Перевод, Французский, Проклятые поэты',
  pageHeader: 'Рембо, Озарения',
  translationsInHeader: ['Перевод M.П. Кудинова'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: true,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 49,
  mainClass: 'mainNoBorders_wide',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <RimbaudIlluminationsOriginal />,

  0: <RimbaudIlluminations1 />,
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
