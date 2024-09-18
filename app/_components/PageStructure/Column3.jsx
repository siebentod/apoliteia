'use client';

import Translation from './Translation';
import { usePageStore } from '../store';
import { useEffect, useState } from 'react';

function Column3({ id, translations, textObject, children }) {
  const transChanged = usePageStore((state) => state.transChanged);
  const [trans, useTrans] = useState(textObject[0]);

  useEffect(() => {
    if (transChanged !== false) {
      useTrans(
        <Translation
          id={id}
          translations={translations}
          textObject={textObject}
        />
      );
    }
  }, [transChanged]);

  return (
    <>
      {trans}
      <p key="column3" className="endOfColumn endOfColumn2"></p>
    </>
  );
}

export default Column3;
