import { Route, Routes } from 'react-router';
import MainPage from 'components/pages/main-page';
import SignInPage from 'components/pages/sign-in-page';
import RequireAuth from 'hooks/require-auth';
import { AppRoutes } from 'const';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <RequireAuth redirectTo={AppRoutes.SignIn}>
            <MainPage />
          </RequireAuth>
        )}
      />
      <Route
        path="/signin"
        element={<SignInPage />}
      />

    </Routes>
  );
}

export default App;
