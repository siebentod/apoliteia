import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import ZarathustraOriginal from './../../text/Zarathustra/ZarathustraOriginal';
import Zarathustra1 from './../../text/Zarathustra/Zarathustra1';

const dataObject: TData = {
  id: 'Zarathustra',
  pageTitle: 'Так говорил Заратустра, Ф. Ницше',
  pageDescription:
    '«Так говорил Заратустра» Ницше на русском и немецком языках',
  pageKeywords:
    'Читать, Оригинал, Философия, Текст, Заратустра, Ницше, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., Так говорил Заратустра',
  translationsInHeader: [
    'Пер. Ю.М. Антоновского, правка К.А. Свасьяна (1990)',
    'Перевод Ю.М. Антоновского (изд. 2007)',
  ],
};

const tocObject: TToc = {
  translationsInToc: ['Пер. 1990', 'Пер. 2007'],
  translationsAlign: 'brick',
  hasFlags: false,
  hasContents: 'collapsible',
};

const styleObject: TStyle = {
  columnsRelation: 50,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <ZarathustraOriginal />,
  0: <Zarathustra1 />,
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
