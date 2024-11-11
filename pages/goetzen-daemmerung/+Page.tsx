import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import GoetzenDaemmerungOriginal from './../../text/GoetzenDaemmerung/GoetzenDaemmerungOriginal';
import GoetzenDaemmerung1 from './../../text/GoetzenDaemmerung/GoetzenDaemmerung1';

const dataObject: TData = {
  id: 'GoetzenDaemmerung',
  pageTitle: 'Сумерки идолов, Ф. Ницше',
  pageDescription: '«Сумерки идолов» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., Сумерки идолов',
  translationsInHeader: ['Перевод Н.Н. Полилова'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: true,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
  columnsRelation: 49,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <GoetzenDaemmerungOriginal />,
  0: <GoetzenDaemmerung1 />,
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
