import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { AppRoutes } from 'enums';
import NavLinkCustom from 'hooks/nav-link-custom';
import AbcIcon from '@mui/icons-material/Abc';
import Avatar from '@mui/material/Avatar';
import pink from '@mui/material/colors/pink';

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
            <NavLinkCustom title="Log-In" to={AppRoutes.SignIn} />
          </Box>
          {userEmail
            ? (
              <Avatar sx={{ marginRight: 5, bgcolor: pink[400] }}>
                {userEmail[0]}
              </Avatar>
            )
            : (
              <Button color="secondary" variant="contained">
                Login
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
