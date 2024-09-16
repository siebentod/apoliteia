import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import RimbaudUneSaisonEnEnferOriginal from '../_text/RimbaudUneSaisonEnEnfer/RimbaudUneSaisonEnEnferOriginal';
import RimbaudUneSaisonEnEnfer1 from '../_text/RimbaudUneSaisonEnEnfer/RimbaudUneSaisonEnEnfer1';

const dataObject: dataClass = {
  id: 'RimbaudUneSaisonEnEnfer',
  pageTitle: 'Рембо, Одно лето в аду',
  pageDescription: '«Одно лето в аду» Рембо на французском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Стихи, Рембо, Одно лето в аду, Билингва, Параллельный, Перевод, Французский, Проклятые поэты',
  pageHeader: 'Рембо, Одно лето в аду',
  translationsInHeader: ['Перевод M.П. Кудинова'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  translationsAlign: null,
  hasContents: true,
  hasFlags: false,
};

const styleObject: styleClass = {
  isNumbered: false,
  isTocHidden: false,
  columnsRelation: 49,
  mainClass: null,
  mainStyle: null,
};

const textObject = {
  TextOriginal: <RimbaudUneSaisonEnEnferOriginal />,
  0: <RimbaudUneSaisonEnEnfer1 />,
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
