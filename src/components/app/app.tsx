import { Route, Routes } from 'react-router';
import MainPage from 'components/pages/main-page';
import SignUpPage from 'components/pages/sign-up-page';
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
            <RequireAuth redirectTo={AppRoutes.SignUp}>
              <MainPage />
            </RequireAuth>
        )}
        />
        <Route
          path={AppRoutes.SignUp}
          element={<SignUpPage />}
        />
        <Route
          path="*"
          element={<SignUpPage />}
        />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
