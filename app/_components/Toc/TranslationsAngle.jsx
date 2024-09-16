function TranslationsAngle({ showTranslations }) {
  return (
    <div className="translationsContainer" id="angleTranslations">
      <div className="translations">{showTranslations()}</div>
    </div>
  );
}

export default TranslationsAngle;
