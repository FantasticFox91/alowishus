import MainScreen from '../../pages/main-screen/main-screen';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MenuScreen from '../../pages/menu-screen/menu-screen';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes >
        <Route
          path={AppRoute.Root}
          element=
            {
              <MainScreen />
            }
        />
        <Route
          path={AppRoute.Menu}
          element =
            {
              <MenuScreen />
            }
        />
        <Route
          path={AppRoute.NotFound}
          element={<MainScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
