import { Ru, En } from './Flags';

function TocTranslations({
  translationsCount,
  translationTitles,
  translationType,
  flags,
  setCurrentTranslation,
  currentTranslation,
}) {
  const showTranslations = () => {
    const variants = [];
    for (let i = 0; i < translationsCount; i++) {
      variants[i] = (
        <button
          key={i}
          onClick={() => {
            setCurrentTranslation(i);
          }}
          className={`${currentTranslation === i ? 'chosen' : null} variant`}
        >
          {flags ? (
            i === 0 ? (
              <Ru />
            ) : i === 1 ? (
              <En />
            ) : null
          ) : (
            translationTitles[i]
          )}
        </button>
      );
    }
    return variants;
  };

  return (
    <div>
      {translationType === 'vertical' && (
        <div id="toc__verticalTranslations" className="toc__translations">
          {showTranslations()}
        </div>
      )}
      {translationType === 'horizontal' && (
        <div id="toc__horizontalTranslations" className="toc__translations">
          {showTranslations()}
        </div>
      )}
    </div>
  );
}

export default TocTranslations;
