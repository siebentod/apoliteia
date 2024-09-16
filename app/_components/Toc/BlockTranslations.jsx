'use client';

import { usePageStore } from '../store';
import { OpenTranslationsButton, Ru, En } from './SVG';
import '../../_styles/choose-translations.scss';
import { useLayoutEffect } from 'react';
import TranslationsBrick from './TranslationsBrick';
import TranslationsAngle from './TranslationsAngle';

function BlockTranslations({
  isTocHidden,
  hasFlags,
  translationsInToc,
  translationsAlign,
}) {
  const setTranslation = usePageStore((state) => state.setTranslation);

  const currentTranslation = usePageStore((state) => state.currentTranslation);
  // const [transShown, setTransShown] = useState(true);
  const transShown = usePageStore((state) => state.transShown);
  const setTransShown = usePageStore((state) => state.setTransShown);

  useLayoutEffect(() => {
    // Layout нужен для angle-страниц
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (!isTocHidden && !(isMobile && translationsAlign !== 'angleToc')) {
      setTransShown(true);
    }
  }, []);

  const handleTransButton = () => {
    if (transShown) {
      setTransShown(false);
    } else {
      setTransShown(true);
      // translationsAlign && setTransChanged(currentTranslation);
    }
  };

  const showTranslations = () => {
    const variants = [];
    for (let i = 0; i < translationsInToc.length; i++) {
      variants[i] = (
        <button
          key={i}
          onClick={() => {
            setTranslation(currentTranslation, i);
          }}
          className={`${currentTranslation === i ? 'chosen' : null} variant`}
        >
          {hasFlags ? (
            i === 0 ? (
              <Ru />
            ) : i === 1 ? (
              <En />
            ) : null
          ) : (
            translationsInToc[i]
          )}
        </button>
      );
    }
    return variants;
  };

  return (
    <>
      {!transShown ? (
        <button
          className={'leftPanelButton openTranslationsButton'}
          onClick={handleTransButton}
        >
          <OpenTranslationsButton />
        </button>
      ) : translationsAlign === 'brick' ? (
        <TranslationsBrick
          setTransShown={setTransShown}
          showTranslations={showTranslations}
        />
      ) : (
        <TranslationsAngle showTranslations={showTranslations} />
      )}
    </>
  );
}

export default BlockTranslations;
