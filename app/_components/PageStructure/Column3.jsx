'use client';

import Translation from './Translation';
import { usePageStore } from '../store';

function Column3({ id, translations, textObject, children }) {
  const transChanged = usePageStore((state) => state.transChanged);

  return (
    <>
      {transChanged !== false ? (
        <Translation
          id={id}
          translations={translations}
          textObject={textObject}
        />
      ) : (
        children
      )}
      <p key="column3" className="endOfColumn endOfColumn2"></p>
    </>
  );
}

export default Column3;
