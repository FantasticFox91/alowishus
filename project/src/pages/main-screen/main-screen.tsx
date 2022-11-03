import BestSelling from '../../components/best-seiling/best-selling';
import DownloadApp from '../../components/download-app/download-app';
import Favourite from '../../components/favourite/favourite';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Promo from '../../components/promo/promo';
import Reviews from '../../components/reviews/reviews';
import Services from '../../components/services/services';
import { PRODUCTS } from '../../mocks/products';

function MainScreen(): JSX.Element {
  return (
    <>
      <Header />
      <Promo />
      <Services />
      <Favourite />
      <BestSelling products={PRODUCTS}/>
      <DownloadApp />
      <Reviews />
      <Footer />
    </>
  );
}

export default MainScreen;
