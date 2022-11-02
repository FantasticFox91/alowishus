import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function MenuScreen(): JSX.Element {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}

export default MenuScreen;
