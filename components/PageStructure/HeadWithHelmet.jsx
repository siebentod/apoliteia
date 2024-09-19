import { Helmet } from 'react-helmet';

function HeadWithHelmet({
  currentTranslation,
  translationsInHeader,
  pageDescription,
  pageTitle,
  pageKeywords,
  pageHeader,
}) {
  const headerTranslation = translationsInHeader[currentTranslation]
    ? translationsInHeader[currentTranslation]
    : pageDescription;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>
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
