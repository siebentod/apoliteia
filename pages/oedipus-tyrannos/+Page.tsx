import React from 'react';
import PageComponent from './../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import SophoclesOedipusTyrannusOriginal from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannusOriginal';
//
import SophoclesOedipusTyrannus1 from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannus1';
//

const dataObject: TData = {
  id: 'SophoclesOedipusTyrannus',
  pageTitle: 'Софокл, Царь Эдип',
  pageDescription: '«Царь Эдип» Софокла на греческом и русском',
  pageKeywords:
    'Читать, Трагедия, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Древнегреческий, Шервинский, Зелинский',
  pageHeader: 'Софокл, Царь Эдип',
  translationsInHeader: ['Перевод Ф.Ф. Зелинского', 'Перевод С.В. Шервинского'],
};

const tocObject: TToc = {
  translationsInToc: ['Ф.Ф. Зелинский', 'С.В. Шервинский'],
  hasContents: true,
  translationsAlign: 'brick',
  hasFlags: false,
};

const styleObject: TStyle = {
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
