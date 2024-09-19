import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import MonadologieOriginal from './../../text/Monadologie/MonadologieOriginal';
import Monadologie1 from './../../text/Monadologie/Monadologie1';

const dataObject: dataClass = {
  id: 'Monadologie',
  pageTitle: 'Лейбниц, Монадология',
  pageDescription: '«Монадология» Лейбница на французском и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Готфрид, Перевод, Французский',
  pageHeader: 'Лейбниц, Монадология',
  translationsInHeader: ['Перевод В.П. Преображенского'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 48,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <MonadologieOriginal />,
  0: <Monadologie1 />,
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
