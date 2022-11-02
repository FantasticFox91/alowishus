import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './promo.scss';

function Promo(): JSX.Element {
  return (
    <section className="page-section promo-section">
      <div className="promo">
        <h2 className="promo__heading page-section__heading">Alowishus Delicious Coffee </h2>
        <p className="promo__text page-section__text">A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.</p>
        <div className="promo__buttons">
          <button className='button-primarly promo__button' type='button'>Download App</button>
          <Link className="promo__link" to={AppRoute.Menu}>Shop Coffee</Link>
        </div>
      </div>
    </section>
  );
}

export default Promo;
