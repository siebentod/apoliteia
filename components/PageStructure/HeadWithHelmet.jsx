function HeadWithHelmet({
  currentTranslation,
  translationsInHeader,
  pageDescription,
  pageHeader,
}) {
  const headerTranslation = translationsInHeader[currentTranslation]
    ? translationsInHeader[currentTranslation]
    : pageDescription;

  return (
    <>
      <header>
        <div id="titleAndAuthor">
          <h1 className="header__title">{pageHeader}</h1>
          <p className="header__translator">{headerTranslation}</p>
        </div>
        <h1 className="header__ap">
          <a href="/">AP</a>
        </h1>
      </header>
    </>
  );
}

export default HeadWithHelmet;
