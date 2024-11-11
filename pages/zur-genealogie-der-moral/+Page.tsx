import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from '../../renderer/types';

import ZurGenealogieDerMoralOriginal from '../../text/ZurGenealogieDerMoral/ZurGenealogieDerMoralOriginal';
import ZurGenealogieDerMoral1 from '../../text/ZurGenealogieDerMoral/ZurGenealogieDerMoral1';

const dataObject: TData = {
  id: 'ZurGenealogieDerMoral',
  pageTitle: 'К генеалогии морали, Ф. Ницше',
  pageDescription: '«К генеалогии морали» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., К генеалогии морали',
  translationsInHeader: ['Пер. К.А. Свасьяна'],
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
  TextOriginal: <ZurGenealogieDerMoralOriginal />,
  0: <ZurGenealogieDerMoral1 />,
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
