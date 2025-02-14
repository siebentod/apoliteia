import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import SchopenhauerAlsErzieherOriginal from './../../text/SchopenhauerAlsErzieher/SchopenhauerAlsErzieherOriginal';
import SchopenhauerAlsErzieher1 from './../../text/SchopenhauerAlsErzieher/SchopenhauerAlsErzieher1';

const dataObject: TData = {
  id: 'SchopenhauerAlsErzieher',
  pageTitle: 'Шопенгауэр как воспитатель, Ф. Ницше',
  pageDescription:
    '«Шопенгауэр как воспитатель» Ницше на немецком и на русском (Несвоевременные размышления)',
  pageKeywords:
    'Читать, Оригинал, Текст, Философия, Билингва, Параллельный, Перевод, Немецкий, Несвоевременные размышления',
  pageHeader: 'Ницше Ф., Шопенгауэр как воспитатель',
  translationsInHeader: ['Перевод изд. «Сочинения в 3-х томах», 1994 г. (?)'],
};

const tocObject: TToc = {
  translationsInToc: [''],
  hasContents: false,
  translationsAlign: null,
  hasFlags: false,
};

const styleObject: TStyle = {
  columnsRelation: 50,
  mainClass: null,
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <SchopenhauerAlsErzieherOriginal />,
  0: <SchopenhauerAlsErzieher1 />,
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
