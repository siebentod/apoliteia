import { Helmet } from 'react-helmet';
import './error-page.scss';

export { Page };

// import { usePageContext } from '../../renderer/usePageContext';

function Page() {
  // const pageContext = usePageContext();
  // let { abortReason } = pageContext;
  // if (!abortReason) {
  //   abortReason = pageContext.is404
  //     ? 'Page not found.'
  //     : 'Something went wrong.';
  // }
  return (
    <div id="error-page">
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="error-page__header">
        <h1 style={{ textAlign: 'center' }}>404 </h1>
        <p>Страница не найдена</p>
      </div>
      <div
        className="error-page__main"
        style={{ textAlign: 'center', color: 'grey' }}
      >
        <p>
          Go to <a href="/">Homepage</a>
        </p>
      </div>
    </div>
  );
}
