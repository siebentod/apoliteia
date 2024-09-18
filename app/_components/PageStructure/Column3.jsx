'use client';

import Translation from './Translation';
import { usePageStore } from '../store';

function Column3({ id, translations, textObject, children }) {
  const transChanged = usePageStore((state) => state.transChanged);

  if (transChanged === false) {
    return (
      <>
        {children}
        <p key="column3" className="endOfColumn endOfColumn2"></p>
      </>
    );
  } else {
    return (
      <>
        <Translation
          id={id}
          translations={translations}
          textObject={textObject}
        />
        <p key="column3" className="endOfColumn endOfColumn2"></p>
      </>
    );
  }
}

export default Column3;
