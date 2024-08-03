import React from 'react';
import PageComponent from './../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import HoraceOriginal from './../../text/Horace/HoraceOriginal';
import HoraceToc from './../../text/Horace/HoraceToc';
import Horace1 from './../../text/Horace/Horace1';

const dataObject: PageClass = {
  id: 'Horace',
  pageTitle: 'Гораций, Оды',
  pageDescription: '«Оды» Горация на латыни и на русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Билингва, Параллельный, Перевод, Латынь, Латинский, Рим',
  pageHeader: 'Гораций, Оды',
  pageTranslator: 'Изд.: Собрание сочинений, СПб., 1993',

  translations: ['Изд.: Собрание сочинений, СПб., 1993'],
  translationsToc: [''],

  columnsRelation: 47,
  styleSpecial: 'verses',

  isNumbered: false,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: 'collapsible',
  translationType: null,
  flags: false,
};

const textObject = {
  TextOriginal: <HoraceOriginal />,
  TextToc: <HoraceToc />,
  0: <Horace1 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
