import React from 'react';
import PageComponent from '../../components/PageComponent';
import { TData, TToc, TStyle } from './../../renderer/types';

import PlatoEuthydemusOriginal from './../../text/PlatoEuthydemus/PlatoEuthydemusOriginal';
import PlatoEuthydemusNumbers from './../../text/PlatoEuthydemus/PlatoEuthydemusNumbers';
import PlatoEuthydemus1 from './../../text/PlatoEuthydemus/PlatoEuthydemus1';

const dataObject: TData = {
  id: 'PlatoEuthydemus',
  pageTitle: 'Евтидем, Платон',
  pageDescription: 'Евтидем Платона на русском и древнегреческом языках',
  pageKeywords:
    'Читать, Оригинал, Текст, Билингва, Параллельный, Перевод, Греческий, Древнегреческий',
  pageHeader: 'Евтидем, Платон',
  translationsInHeader: [
    'Перевод С.Я. Шейнман-Топштейн',
    'Перевод W.R.M. Lamb',
  ],
};

const tocObject: TToc = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: TStyle = {
  columnsRelation: 45,
  mainClass: null,
  mainStyle: null,
  isNumbered: true,
  isTocHidden: false,
};

const textObject = {
  TextOriginal: <PlatoEuthydemusOriginal />,
  TextNumbers: <PlatoEuthydemusNumbers />,
  0: <PlatoEuthydemus1 />,
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
