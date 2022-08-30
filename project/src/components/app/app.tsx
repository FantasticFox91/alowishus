import BestSelling from '../best-seiling/best-selling';
import DownloadApp from '../download-app/download-app';
import Favourite from '../favourite/favourite';
import Header from '../header/header';
import Promo from '../promo/promo';
import Services from '../services/services';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Promo />
      <Services />
      <Favourite />
      <BestSelling />
      <DownloadApp />
    </>
  );
}

export default App;
