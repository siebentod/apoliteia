import { Helmet } from 'react-helmet';

export default function Page() {
  return (
    <div id="home">
      <Helmet>
        <title>...</title>
      </Helmet>
      <div className="home__header">
        <div className="TitleAndDescription">
          <h1 style={{ textAlign: 'center', fontWeight: 'normal' }}>
            All about us
          </h1>
        </div>
      </div>
      <div
        className="home__main"
        style={{ textAlign: 'center', color: 'grey', marginTop: '20px' }}
      >
      <p style={{ marginBottom: '5px' }}>
        Go to <a href="/">Homepage</a>
      </p>
        <a href="https://soundcloud.com/viking-random/atlantean-blood-apoliteia">
          <img
            src="https://s0.rbk.ru/v6_top_pics/media/img/9/79/755617312712799.png"
            style={{ width: '384px', height: '248px' }}
          />
        </a>
      </div>
    </div>
  );
}
