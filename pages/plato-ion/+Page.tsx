import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoIonOriginal from './../../text/PlatoIon/PlatoIonOriginal';
import PlatoIonNumbers from './../../text/PlatoIon/PlatoIonNumbers';
import PlatoIon1 from './../../text/PlatoIon/PlatoIon1';
import PlatoIon2 from './../../text/PlatoIon/PlatoIon2';

const dataObject: PageClass = {
  id: 'PlatoIon',
  pageTitle: 'Ион, Платон',
  pageDescription: 'Ион Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Ион, Платон',
  pageTranslator: 'Перевод Я.М. Боровского',

  translations: ['Перевод Я.М. Боровского', 'Перевод W.R.M. Lamb'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 50,
  styleSpecial: 'angleToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: 'vertical',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoIonOriginal />,
  TextNumbers: <PlatoIonNumbers />,
  0: <PlatoIon1 />,
  1: <PlatoIon2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
