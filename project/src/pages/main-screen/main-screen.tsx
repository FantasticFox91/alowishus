import BestSelling from '../../components/best-seiling/best-selling';
import DownloadApp from '../../components/download-app/download-app';
import Favourite from '../../components/favourite/favourite';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Reviews from '../../components/reviews/reviews';
import Services from '../../components/services/services';

function MainScreen(): JSX.Element {
  return (
    <>
      <Header />
      <Services />
      <Favourite />
      <BestSelling />
      <DownloadApp />
      <Reviews />
      <Footer />
    </>
  );
}

export default MainScreen;
