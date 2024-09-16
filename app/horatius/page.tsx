import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import HoraceOriginal from '../_text/Horace/HoraceOriginal';

import Horace1 from '../_text/Horace/Horace1';

const dataObject: dataClass = {
  id: 'Horace',
  pageTitle: 'Гораций, Оды',
  pageDescription: '«Оды» Горация на латыни и на русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Латынь, Латинский, Рим',
  pageHeader: 'Гораций, Оды',
  translationsInHeader: ['Изд.: Собрание сочинений, СПб., 1993'],
};

const tocObject: tocClass = {
  translationsInToc: [''],
  hasContents: 'collapsible',
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 47,
  mainClass: 'mainVerses',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <HoraceOriginal />,

  0: <Horace1 />,
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
