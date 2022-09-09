import './download-app.scss';

function DownloadApp(): JSX.Element {
  return (
    <section className="page-section download-app-section">
      <div className="download-app">
        <h2 className="download-app__heading page-section__heading">Instant Coffee At Your Home</h2>
        <p className="download-app__text page-section__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='download-app__button button-primarly' type='button'>Download our app</button>
      </div>
      <img className='download-app__image' src="../img/download-app-bg.png" alt="" width="721" height="727"/>
    </section>
  );
}

export default DownloadApp;
