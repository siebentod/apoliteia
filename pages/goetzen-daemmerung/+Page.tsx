import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import GoetzenDaemmerungOriginal from './../../text/GoetzenDaemmerung/GoetzenDaemmerungOriginal';
import GoetzenDaemmerung1 from './../../text/GoetzenDaemmerung/GoetzenDaemmerung1';

const dataObject: dataClass = {
  id: 'GoetzenDaemmerung',
  pageTitle: 'Сумерки идолов, Ф. Ницше',
  pageDescription: '«Сумерки идолов» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., Сумерки идолов',
  translationsInHeader: ['Перевод Н.Н. Полилова'],
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
