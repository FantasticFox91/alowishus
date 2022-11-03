import { Product } from '../../types/products';
import BestSellingCard from '../best-seiling-card/best-seiling-card';
import './best-selling-list.scss';

type bestSellingListProps = {
  products: Product[]
}
function BestSellingList({products}: bestSellingListProps): JSX.Element {
  const productsList =
      products.map((product) => (
        <li className="bestselling__item" key={product.id}>
          <BestSellingCard {...product} />
        </li>
      ));

  return (
    <ul className="bestselling__list">
      {productsList}
    </ul>
  );
}

export default BestSellingList;
