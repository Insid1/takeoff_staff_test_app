import { useAppSelector } from 'store/hooks';
import { selectIsAuth, selectIsAuthDataLoaded } from 'store/user/selectors';
import { Navigate } from 'react-router';
import { AppRoutes } from 'const';
import Loader from 'components/loader/loader';

interface IRequireAuth {
  children: React.ReactElement,
  redirectTo: AppRoutes
}

function RequireAuth({ children, redirectTo }: IRequireAuth): React.ReactElement {
  const isAuth = useAppSelector(selectIsAuth);
  const isAuthDataLoaded = useAppSelector(selectIsAuthDataLoaded);

  if (!isAuthDataLoaded) {
    return <Loader />;
  }

  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
