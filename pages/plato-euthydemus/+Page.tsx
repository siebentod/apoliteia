import React from 'react';
import PageComponent from '../../components/PageComponent';
import { PageClass } from './../../renderer/types';

import PlatoEuthydemusOriginal from './../../text/PlatoEuthydemus/PlatoEuthydemusOriginal';
import PlatoEuthydemusNumbers from './../../text/PlatoEuthydemus/PlatoEuthydemusNumbers';
import PlatoEuthydemus1 from './../../text/PlatoEuthydemus/PlatoEuthydemus1';
import PlatoEuthydemus2 from './../../text/PlatoEuthydemus/PlatoEuthydemus2';

const dataObject: PageClass = {
  id: 'PlatoEuthydemus',
  pageTitle: 'Евтидем, Платон',
  pageDescription: 'Евтидем Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Евтидем, Платон',
  pageTranslator: 'Перевод С.Я. Шейнман-Топштейн',

  translations: ['Перевод С.Я. Шейнман-Топштейн', 'Перевод W.R.M. Lamb'],
  translationsToc: ['Ru', 'En'],

  columnsRelation: 45,
  styleSpecial: 'angleToc',

  isNumbered: true,
  isTocHidden: false,
  isJumpNeeded: false,

  hasContents: false,
  translationType: 'vertical',
  flags: true,
};

const textObject = {
  TextOriginal: <PlatoEuthydemusOriginal />,
  TextNumbers: <PlatoEuthydemusNumbers />,
  0: <PlatoEuthydemus1 />,
  1: <PlatoEuthydemus2 />,
};

function Page() {
  return <PageComponent dataObject={dataObject} textObject={textObject} />;
}

export default Page;
