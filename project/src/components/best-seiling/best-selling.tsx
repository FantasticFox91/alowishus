import './best-selling.scss';
import { Product } from '../../types/products';
import BestSellingList from '../best-selling-list/best-selling-list';

type bestSellingProps = {
  products: Product[]
}

function BestSelling(products: bestSellingProps): JSX.Element {
  const threePopularProducts = products.products.splice(0, 3);
  return (
    <section className="page-section">
      <div className="bestselling">
        <h2 className="bestselling__heading page-section__heading">Best Selling Coffee</h2>
        <p className="bestselling__text page-section__text">A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.</p>
        <BestSellingList products={threePopularProducts}/>
      </div>
    </section>
  );
}

export default BestSelling;
