import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import ZarathustraOriginal from '../../_text/Zarathustra/ZarathustraOriginal.jsx';
import Zarathustra1 from '../../_text/Zarathustra/Zarathustra1.jsx';

const dataObject: dataClass = {
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

const tocObject: tocClass = {
  translationsInToc: ['Пер. 1990', 'Пер. 2007'],
  translationsAlign: 'brick',
  hasFlags: false,
  hasContents: 'collapsible',
};

const styleObject: styleClass = {
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
