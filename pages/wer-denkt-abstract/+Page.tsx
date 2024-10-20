import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import HegelWerDenktAbstractOriginal from './../../text/HegelWerDenktAbstract/HegelWerDenktAbstractOriginal';
import HegelWerDenktAbstract1 from './../../text/HegelWerDenktAbstract/HegelWerDenktAbstract1';

const dataObject: dataClass = {
  id: 'HegelWerDenktAbstract',
  pageTitle: 'Гегель, Кто мыслит абстрактно?',
  pageDescription: '«Кто мыслит абстрактно?» Гегеля на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Ильенков, Параллельный, Перевод, Немецкий, Билингва',
  pageHeader: 'Гегель, Кто мыслит абстрактно?',
  translationsInHeader: ['Перевод Э.В. Ильенкова'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  translationsAlign: null,
  hasFlags: false,
  hasContents: false,
};

const styleObject: styleClass = {
  columnsRelation: 50,
  mainClass: 'center',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <HegelWerDenktAbstractOriginal />,
  0: <HegelWerDenktAbstract1 />,
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
