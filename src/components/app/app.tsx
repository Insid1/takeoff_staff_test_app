import { Route, Routes } from 'react-router';
import MainPage from 'components/pages/main-page';
import SignInPage from 'components/pages/sign-in-page';
import RequireAuth from 'hooks/require-auth';
import { AppRoutes } from 'enums';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'JetBrains Mono',
    ].join(','),
  },
  spacing: 2,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
