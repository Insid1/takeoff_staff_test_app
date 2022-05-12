import Header from 'components/header/header';
import Loader from 'components/loader/loader';
import { useEffect } from 'react';
import { selectIsDataLoaded } from 'store/data/selectors';
import { fetchUsers } from 'store/data/thunks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import UserList from 'components/user/user-list';

function MainPage() {
  const dispatch = useAppDispatch();
  const isUsersDataLoaded = useAppSelector(selectIsDataLoaded);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      {
      !isUsersDataLoaded
        ? <Loader />
        : (<UserList />
        )

    }

    </>

  );
}

export default MainPage;
