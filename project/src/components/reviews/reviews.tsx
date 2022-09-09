import './reviews.scss';

function Reviews(): JSX.Element {
  return (
    <section className="page-section reviews">
      <div className="slider">
        <ul className="slider__list">
          <li className="slider__item">
            <div className="card">
              <img className='card__image' src="../img/brooklyn-simmons.png" alt="Brooklyn Simmons" width="468" height="324" />
              <figure className="card__quote">
                <figcaption className="card__author card__author--5Stars">Brooklyn Simmons</figcaption>
                <blockquote className="card__text">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                </blockquote>
              </figure>
            </div>
          </li>
          <li className="slider__item">
            <div className="card">
              <img className='card__image' src="../img/imam-white.png" alt="Imam White" width="468" height="324"/>
              <figure className="card__quote">
                <figcaption className="card__author card__author--5Stars">Imam White</figcaption>
                <blockquote className="card__text">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                </blockquote>
              </figure>
            </div>
          </li>
          <li className="slider__item">
            <div className="card">
              <img className='card__image' src="../img/imam-white.png" alt="Imam White" width="468" height="324"/>
              <figure className="card__quote">
                <figcaption className="card__author card__author--5Stars">Brooklyn Simmons</figcaption>
                <blockquote className="card__text">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                </blockquote>
              </figure>
            </div>
          </li>
        </ul>
      </div>
      <div className="review">
        <h2 className="review__heading page-section__heading">What Our Customers Say</h2>
        <div className="review__rating rating">
          <p className="rating__number">4.9</p>
          <p className="rating__text">based on 2452+ reviews</p>
        </div>
        <div className="review__buttons">
          <button className='review__button' type='button'>
            <span className="visually-hidden">Previous slide</span>
          </button>
          <button className='review__button review__button--next' type='button'>
            <span className="visually-hidden">Next slide</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
