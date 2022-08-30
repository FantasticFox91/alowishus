import './download-app.scss';

function DownloadApp(): JSX.Element {
  return (
    <section className="page-section">
      <div className="download-app">
        <h1 className="download-app__heading page-section__heading">Instant Coffee At Your Home</h1>
        <p className="download-app__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='download-app__button button-primarly' type='button'>Download our app</button>
      </div>
    </section>
  );
}

export default DownloadApp;
