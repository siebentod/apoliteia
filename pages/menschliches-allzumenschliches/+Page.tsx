import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import MenschlichesAllzumenschlichesOriginal from './../../text/MenschlichesAllzumenschliches/MenschlichesAllzumenschlichesOriginal';
import MenschlichesAllzumenschliches1 from './../../text/MenschlichesAllzumenschliches/MenschlichesAllzumenschliches1';

const dataObject: dataClass = {
  id: 'MenschlichesAllzumenschliches',
  pageTitle: 'Человеческое, слишком человеческое, Ф. Ницше',
  pageDescription:
    '«Человеческое, слишком человеческое» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., Человеческое, слишком человеческое',
  translationsInHeader: ['Пер. В.М. Бакусева'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: true,
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
  TextOriginal: <MenschlichesAllzumenschlichesOriginal />,
  0: <MenschlichesAllzumenschliches1 />,
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
