import { Helmet } from 'react-helmet';

function HeadWithHelmet({ dataObject, currentTranslation }) {
  const headerTranslation = dataObject.translations[currentTranslation]
    ? dataObject.translations[currentTranslation]
    : dataObject.pageDescription;

  return (
    <>
      <Helmet>
        <title>{dataObject.pageTitle}</title>
        <meta name="description" content={dataObject.pageDescription} />
        <meta name="keywords" content={dataObject.pageKeywords} />
      </Helmet>
      <header>
        <div id="titleAndAuthor">
          <h1 className="header__title">{dataObject.pageHeader}</h1>
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
