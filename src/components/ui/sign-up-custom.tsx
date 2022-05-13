import { VpnLockOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyAlert, { IMyAlert } from 'components/ui/alert-custom';
import React from 'react';

interface SignUpCustomProps {
  children: React.ReactElement[],
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
  showAlert: boolean,
  alertParams: IMyAlert,
}

function SignUpCustom(props : SignUpCustomProps) {
  const {
    children, onSubmit, showAlert, alertParams,
  } = props;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      h: '100%',
    }}
    >
      <Box
        sx={{
          mt: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 800,
          minWidth: 500,
        }}
      >
        <Avatar sx={{
          bgcolor: 'secondary.main',
          m: 2,
        }}
        >
          <VpnLockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmit}
          mt={3}
        />
        {children}
        {showAlert
        && (
        <MyAlert
          message={alertParams.message}
          severity={alertParams.severity}
        />
        )}
      </Box>
    </Box>
  );
}

export default SignUpCustom;
