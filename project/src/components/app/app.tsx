import MainScreen from '../../pages/main-screen/main-screen';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes >
        <Route
          path={'/'}
          element=
            {
              <MainScreen />
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
