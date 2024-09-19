'use client';

import Translation from './Translation';
import { usePageStore } from '../store';

function Column3({ id, translations, textObject, children }) {
  const transChanged = usePageStore((state) => state.transChanged);

  return transChanged === false ? (
    children
  ) : (
    <>
      <Translation
        id={id}
        translations={translations}
        textObject={textObject}
      />
    </>
  );
}

export default Column3;
