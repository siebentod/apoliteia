import { Ru, En } from './Flags';

function TocHorizontalTranslations({
  flags,
  translationsCount,
  setCurrentTranslation,
  currentTranslation,
  translationTitles,
}) {
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

  return (
    <div id="toc__horizontalTranslations" className="toc__translations">
      {variants}
    </div>
  );
}

function TocVerticalTranslations({
  flags,
  translationsCount,
  setCurrentTranslation,
  currentTranslation,
  translationTitles,
}) {
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

  return (
    <div id="toc__verticalTranslations" className="toc__translations">
      {variants}
    </div>
  );
}

function TocContent({
  styleSpecial,
  translationType,
  hasContents,
  TextToc,
  flags,
  translationsCount,
  setCurrentTranslation,
  currentTranslation,
  translationTitles,
}) {
  return (
    <>
      <div
        className="toc"
        id="tocContent"
        style={{
          ...(typeof styleSpecial === 'string' &&
            styleSpecial.includes('smallToc') && {
              resize: 'none',
              padding: '2px 1px',
            }),
        }}
      >
        {translationType === 'horizontal' && (
          <TocHorizontalTranslations
            flags={flags}
            translationsCount={translationsCount}
            setCurrentTranslation={setCurrentTranslation}
            currentTranslation={currentTranslation}
            translationTitles={translationTitles}
          />
        )}
        {translationType === 'vertical' && (
          <TocVerticalTranslations
            flags={flags}
            translationsCount={translationsCount}
            setCurrentTranslation={setCurrentTranslation}
            currentTranslation={currentTranslation}
            translationTitles={translationTitles}
          />
        )}
        <div className="toc__toc">{hasContents && TextToc}</div>
      </div>
    </>
  );
}

export default TocContent;
