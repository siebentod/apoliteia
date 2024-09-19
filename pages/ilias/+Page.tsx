import React from 'react';
import PageComponent from './../../components/PageComponent';
import { dataClass, tocClass, styleClass } from './../../renderer/types';

import IliasOriginal from './../../text/Ilias/IliasOriginal';
import IliasNumbers from './../../text/Ilias/IliasNumbers';
import Ilias1 from './../../text/Ilias/Ilias1';

const dataObject: dataClass = {
  id: 'Ilias',
  pageTitle: 'Гомер, Илиада',
  pageDescription: '«Илиада» Гомера на греческом и русском',
  pageKeywords:
    'Читать, Стихи, Оригинал, Текст, Эпос, Древнегреческий, Билингва, Параллельный, Перевод, Вересаев, Гнедич, Минский, Сальников',
  pageHeader: 'Гомер, Илиада',
  translationsInHeader: [
    'Перевод В.В. Вересаева (1949)',
    'Перевод Н.И. Гнедича (1829)',
    'Перевод Н.М. Минского (1896)',
    'Перевод А.А. Сальникова (2011)',
  ],
};

const tocObject: tocClass = {
  translationsInToc: [
    'В.В. Вересаев',
    'Н.И. Гнедич',
    'Н.М. Минский',
    'А.А. Сальников',
  ],
  translationsAlign: 'brick',
  hasFlags: false,
  hasContents: true,
};

const styleObject: styleClass = {
  columnsRelation: 42,
  mainClass: 'main0Borders',
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <IliasOriginal />,
  TextNumbers: <IliasNumbers />,
  0: <Ilias1 />,
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
