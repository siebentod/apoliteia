import { Helmet } from 'react-helmet';

function HeadWithHelmet(props) {
  const headerTranslation = props.dataObject.translations[
    props.currentTranslation
  ]
    ? props.dataObject.translations[props.currentTranslation]
    : props.dataObject.pageDescription;

  return (
    <>
      <Helmet>
        <title>{props.dataObject.pageTitle}</title>
        <meta name="description" content={props.dataObject.pageDescription} />
        <meta name="keywords" content={props.dataObject.pageKeywords} />
      </Helmet>
      <header>
        <div id="titleAndAuthor">
          <h1 className="header__title">{props.dataObject.pageHeader}</h1>
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
