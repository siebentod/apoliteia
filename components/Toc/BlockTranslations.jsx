import { OpenTranslationsButton, Ru, En } from './SVG';
import './choose-translations.scss';
import { useLayoutEffect, useState } from 'react';
import TranslationsBrick from './TranslationsBrick';
import TranslationsAngle from './TranslationsAngle';

function BlockTranslations({
  isTocHidden,
  setTransChanged,
  setCurrentTranslation,
  currentTranslation,
  hasFlags,
  translationsInToc,
  translationsAlign,
}) {
  const [transShown, setTransShown] = useState(true);

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
            setTransChanged(currentTranslation);
            setCurrentTranslation(i);
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
          setCurrentTranslation={setCurrentTranslation}
          currentTranslation={currentTranslation}
          setTransChanged={setTransChanged}
          hasFlags={hasFlags}
          translationsAlign={translationsAlign}
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
