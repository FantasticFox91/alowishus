import BestSelling from '../best-seiling/best-selling';
import DownloadApp from '../download-app/download-app';
import Favourite from '../favourite/favourite';
import Footer from '../footer/footer';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Services from '../services/services';

function App(): JSX.Element {
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

export default App;
