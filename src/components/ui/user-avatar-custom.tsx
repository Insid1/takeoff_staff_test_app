import Avatar, { AvatarProps } from '@mui/material/Avatar';
import pink from '@mui/material/colors/pink';

interface UserAvatarProps extends AvatarProps {
  bgcolor?: string,
}

function UserAvatar(props: UserAvatarProps) {
  const { children, bgcolor = pink[500] } = props;

  return (
    <Avatar
      {...props}
      sx={{ marginRight: 5, bgcolor }}
    >
      {typeof children === 'string'
        ? children[0].toUpperCase()
        : children}
    </Avatar>
  );
}

export default UserAvatar;
