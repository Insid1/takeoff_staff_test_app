import { Route, Routes } from 'react-router';
import MainPage from 'components/pages/main-page';
import SignInPage from 'components/pages/sign-in-page';
import RequireAuth from 'hooks/require-auth';
import { AppRoutes } from 'enums';

function App() {
  return (
    <Routes>
      <Route
        path={AppRoutes.Main}
        element={(
          <RequireAuth redirectTo={AppRoutes.SignIn}>
            <MainPage />
          </RequireAuth>
        )}
      />
      <Route
        path={AppRoutes.SignIn}
        element={<SignInPage />}
      />

    </Routes>
  );
}

export default App;
