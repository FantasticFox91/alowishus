import './favourite.css';

function Favourite(): JSX.Element {
  return (
    <section className="page-section favourite-section">
      <div className="favourite">
        <h2 className="favourite__heading page-section__heading">Order Your Favourite Coffee</h2>
        <p className="favourite__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='favourite__button button-primarly' type='button'>Order now</button>
      </div>
    </section>
  );
}

export default Favourite;
