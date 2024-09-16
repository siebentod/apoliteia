import React from 'react';
import PageComponent from '../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../_components/types.ts';

import SophoclesOedipusTyrannusOriginal from '../_text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannusOriginal';
//
import SophoclesOedipusTyrannus1 from '../_text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannus1';
//

const dataObject: dataClass = {
  id: 'SophoclesOedipusTyrannus',
  pageTitle: 'Софокл, Царь Эдип',
  pageDescription: '«Царь Эдип» Софокла на греческом и русском',
  pageKeywords:
    'Читать, Трагедия, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Древнегреческий, Шервинский, Зелинский',
  pageHeader: 'Софокл, Царь Эдип',
  translationsInHeader: ['Перевод Ф.Ф. Зелинского', 'Перевод С.В. Шервинского'],
};

const tocObject: tocClass = {
  translationsInToc: ['Ф.Ф. Зелинский', 'С.В. Шервинский'],
  hasContents: true,
  translationsAlign: 'brick',
  hasFlags: false,
};

const styleObject: styleClass = {
  columnsRelation: 50,
  mainClass: 'mainNoBorders_narrow',
  mainStyle: null,
  isNumbered: false,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <SophoclesOedipusTyrannusOriginal />,
  //
  0: <SophoclesOedipusTyrannus1 />,
  //
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
