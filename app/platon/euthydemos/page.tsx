import React from 'react';
import PageComponent from '../../_components/PageComponent.jsx';
import { dataClass, tocClass, styleClass } from '../../_components/types.ts';

import PlatoEuthydemusOriginal from '../../_text/PlatoEuthydemus/PlatoEuthydemusOriginal.jsx';
import PlatoEuthydemusNumbers from '../../_text/PlatoEuthydemus/PlatoEuthydemusNumbers.jsx';
import PlatoEuthydemus1 from '../../_text/PlatoEuthydemus/PlatoEuthydemus1';

const dataObject: dataClass = {
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

const tocObject: tocClass = {
  translationsInToc: ['Ru', 'En'],
  hasContents: false,
  translationsAlign: 'angle',
  hasFlags: true,
};

const styleObject: styleClass = {
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
