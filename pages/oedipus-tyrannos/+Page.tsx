import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import SophoclesOedipusTyrannusOriginal from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannusOriginal';
import SophoclesOedipusTyrannusToc from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannusToc';
import SophoclesOedipusTyrannus1 from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannus1';
import SophoclesOedipusTyrannus2 from './../../text/SophoclesOedipusTyrannus/SophoclesOedipusTyrannus2';

const dataObject: PageClass = {
  id: 'SophoclesOedipusTyrannus',
  pageTitle: 'Софокл, Царь Эдип',
  pageDescription: '«Царь Эдип» Софокла на греческом и русском',
  pageKeywords:
    'Читать, Трагедия, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Древнегреческий, Шервинский, Зелинский',
  pageHeader: 'Софокл, Царь Эдип',
  pageTranslator: 'Перевод Ф.Ф. Зелинского',

  translations: ['Перевод Ф.Ф. Зелинского', 'Перевод С.В. Шервинского'],
  translationsToc: ['Ф.Ф. Зелинский', 'С.В. Шервинский'],

  columnsRelation: 50,
  styleSpecial: 'mainNoBorders',

  isNumbered: false,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: true,
  translationType: 'vertical',
  flags: false,
};

const textObject = {
  TextOriginal: <SophoclesOedipusTyrannusOriginal />,
  TextToc: <SophoclesOedipusTyrannusToc />,
  0: <SophoclesOedipusTyrannus1 />,
  1: <SophoclesOedipusTyrannus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
