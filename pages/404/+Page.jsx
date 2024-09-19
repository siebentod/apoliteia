import { Helmet } from 'react-helmet';

function Page() {
  return (
    <div id="home">
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="home__header">
        <div className="TitleAndDescription">
          <h1 style={{ textAlign: 'center' }}>404 </h1>
        </div>
      </div>
      <div
        className="home__main"
        style={{ textAlign: 'center', color: 'grey', marginTop: '20px' }}
      >
        Go to
      </div>
    </div>
  );
}

export default Page;
