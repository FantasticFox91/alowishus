import './promo.css';

function Promo(): JSX.Element {
  return (
    <section className="page-section">
      <div className="promo">
        <h2 className="promo__heading page-section__heading">Alowishus Delicious Coffee </h2>
        <p className="promo__text page-section__text">A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.</p>
        <div className="promo__buttons">
          <button className='button-primarly promo__button' type='button'>Download App</button>
          <a className="promo__link" href="#">Shop Coffee</a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
