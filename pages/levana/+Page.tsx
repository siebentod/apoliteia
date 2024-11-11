import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import LevanaOriginal from './../../text/Levana/LevanaOriginal';
import Levana1 from './../../text/Levana/Levana1';

const dataObject: TData = {
  id: 'Levana',
  pageTitle: 'Томас Де Квинси, Левана и Богородицы Скорби',
  pageDescription:
    '"Левана и Богородицы Скорби" Де Квинси на английском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Suspiria De Profundis, Параллельный, Перевод, Английский',
  pageHeader: 'Томас Де Квинси, Левана и Богородицы Скорби',
  translationsInHeader: ['Перевод С.Л. Сухарева'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
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
