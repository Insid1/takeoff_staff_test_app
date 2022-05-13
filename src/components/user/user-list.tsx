import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { selectUsers, selectUsersNumberCurrent, selectUsersNumberTotal } from 'store/data/selectors';
import { Button, Stack, Typography } from '@mui/material';
import { useAppDispatch } from 'store/hooks';
import { setUsersNumberCurrent } from 'store/data/data-slice';
import { fetchUsers } from 'store/data/thunks';
import Sorting from 'components/sorting/sorting';
import { INCREMENT } from 'consts';
import UserItem from './user-item';

export default function UserList() {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  const userNumberCurrent = useSelector(selectUsersNumberCurrent);
  const userNumberTotal = useSelector(selectUsersNumberTotal);

  const handleMoreClick = () => {
    if (userNumberCurrent + INCREMENT > userNumberTotal) {
      dispatch(setUsersNumberCurrent(userNumberTotal));
    }
    dispatch(setUsersNumberCurrent(userNumberCurrent + INCREMENT));
    dispatch(fetchUsers());
  };

  return (
    <Box sx={{ m: 20 }}>
      <Typography
        margin={10}
        textAlign="center"
        component="h1"
        variant="h5"
      >
        User List
      </Typography>
      <Stack spacing={10}>
        <Sorting />
        {users.map((user) => (
          <UserItem
            key={user.id}
            {...user}
          />
        ))}
        {userNumberCurrent < userNumberTotal
          ? (
            <Button
              onClick={handleMoreClick}
              variant="contained"
            >
              More
            </Button>
          )
          : ''}
      </Stack>
    </Box>
  );
}
