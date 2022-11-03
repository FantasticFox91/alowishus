import './best-seiling-card.scss';

type BestSellingCardProps = {
  id: number,
  name: string,
  description: string,
  price: number,
}

function BestSellingCard(card: BestSellingCardProps): JSX.Element {
  return (
    <div className="bestselling-card">
      <h3 className="bestselling-card__heading bestselling-card__heading--espresso">{card.name}</h3>
      <p className="bestselling-card__text">{card.description}</p>
      <div className="bestselling__price-and-button">
        <p className="bestselling__price">${card.price}</p>
        <button className="bestseling-card__button button-primarly">Order now</button>
      </div>
    </div>
  );
}

export default BestSellingCard;
