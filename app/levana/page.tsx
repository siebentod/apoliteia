import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import LevanaOriginal from '../_text/Levana/LevanaOriginal';
import Levana1 from '../_text/Levana/Levana1';

const dataObject: dataClass = {
  id: 'Levana',
  pageTitle: 'Томас Де Квинси, Левана и Богородицы Скорби',
  pageDescription:
    '"Левана и Богородицы Скорби" Де Квинси на английском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Suspiria De Profundis, Параллельный, Перевод, Английский',
  pageHeader: 'Томас Де Квинси, Левана и Богородицы Скорби',
  translationsInHeader: ['Перевод С.Л. Сухарева'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 46.6,
  mainClass: 'center',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: true,
};

const textObject = {
  TextOriginal: <LevanaOriginal />,
  0: <Levana1 />,
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
