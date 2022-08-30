import './best-selling.css';

function BestSelling(): JSX.Element {
  return (
    <section className="page-section">
      <div className="bestselling">
        <h2 className="bestselling__heading page-section__heading">Best Selling Coffee</h2>
        <p className="bestselling__text">A drink from the ‘My Alowishus’ bottled brews range OR <br /> grab one of our delicious coffee’s.</p>
        <ul className="bestselling__list">
          <li className="bestselling__item">
            <div className="bestselling-card">
              <h3 className="bestselling-card__heading bestselling-card__heading--espresso">Double <br /> Espresso</h3>
              <p className="bestselling-card__text">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
              <div className="bestselling__price-and-button">
                <p className="bestselling__price">$59.99</p>
                <button className="bestseling-card__button button-primarly">Order now</button>
              </div>
            </div>
          </li>
          <li className="bestselling__item">
            <div className="bestselling-card">
              <h3 className="bestselling-card__heading bestselling-card__heading--caramel">Caramel <br /> Frappe</h3>
              <p className="bestselling-card__text">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
              <div className="bestselling__price-and-button">
                <p className="bestselling__price">$59.99</p>
                <button className="bestseling-card__button button-primarly">Order now</button>
              </div>
            </div>
          </li>
          <li className="bestselling__item">
            <div className="bestselling-card">
              <h3 className="bestselling-card__heading bestselling-card__heading--iced">Iced <br /> Coffee</h3>
              <p className="bestselling-card__text">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
              <div className="bestselling__price-and-button">
                <p className="bestselling__price">$59.99</p>
                <button className="bestseling-card__button button-primarly">Order now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BestSelling;
