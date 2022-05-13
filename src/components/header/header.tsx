import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { AppRoutes } from 'enums';
import NavLinkCustom from 'hooks/nav-link-custom';
import AbcIcon from '@mui/icons-material/Abc';
import UserAvatar from 'components/ui/user-avatar-custom';
import SignIn from 'components/sign-in/sign-in';

function Header() {
  const userEmail = localStorage.getItem('email');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AbcIcon
            fontSize="large"
            sx={{
              marginRight: 10,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <NavLinkCustom title="Main" to={AppRoutes.Main} />
            <NavLinkCustom title="Sign Up" to={AppRoutes.SignUp} />
          </Box>
          {userEmail
            ? (
              <UserAvatar>{userEmail}</UserAvatar>
            )
            : (
              <SignIn />
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
