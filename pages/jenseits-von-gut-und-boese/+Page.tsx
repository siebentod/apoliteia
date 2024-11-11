import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import JenseitsVonGutUndBoeseOriginal from './../../text/JenseitsVonGutUndBoese/JenseitsVonGutUndBoeseOriginal';
import JenseitsVonGutUndBoese1 from './../../text/JenseitsVonGutUndBoese/JenseitsVonGutUndBoese1';

const dataObject: TData = {
  id: 'JenseitsVonGutUndBoese',
  pageTitle: 'По ту сторону добра и зла, Ф. Ницше',
  pageDescription: '«По ту сторону добра и зла» Ницше на немецком и русском',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий',
  pageHeader: 'Ницше Ф., По ту сторону добра и зла',
  translationsInHeader: ['Пер. Н.Н. Полилова, ред. К.А. Свасьяна'],
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
  TextOriginal: <JenseitsVonGutUndBoeseOriginal />,
  0: <JenseitsVonGutUndBoese1 />,
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
