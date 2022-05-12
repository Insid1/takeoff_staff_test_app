import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { selectUsers } from 'store/data/selectors';
import { Stack, Typography } from '@mui/material';
import UserItem from './user-item';

export default function UserList() {
  const users = useSelector(selectUsers);
  return (
    <Box sx={{ mr: 20, ml: 20 }}>
      <Typography
        margin={10}
        textAlign="center"
        component="h1"
        variant="h5"
      >
        User List
      </Typography>
      <Stack spacing={10}>
        {users.slice(0, 10).map((user) => (
          <UserItem
            key={user.id}
            {...user}
          />
        ))}
      </Stack>

    </Box>
  );
}
