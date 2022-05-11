import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { AppRoutes } from 'enums';
import { signIn } from 'store/user/thunks';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { VpnLockOutlined } from '@mui/icons-material';
import MyAlert, { IMyAlert } from 'components/my-alert/alert';
import { useForm, SubmitHandler } from 'react-hook-form';

type UserInputs = {
  email: string,
  password: string,
};

function SignInForm() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertProps, setAlertProps] = useState<IMyAlert>({
    message: 'You successfully logged in!',
    severity: 'success',
  });
  const dispatch = useAppDispatch();

  const {
    register, handleSubmit, reset,
  } = useForm<UserInputs>();

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    dispatch(signIn(data))
      .unwrap()
      .then(() => {
        reset();
        setAlertProps({
          message: 'You successfully logged in!',
          severity: 'success',
        });
        navigate(AppRoutes.Main);
      })
      .catch(() => {
        setAlertProps({
          message: 'User already exist or invalid data!',
          severity: 'error',
        });
      })
      .finally(() => {
        setShowAlert(true);
      });
  };

  return (
    <Box
      sx={{
        mt: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        Sign in
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        mt={3}
      >
        <TextField
          id="outlined-basic"
          label="Enter email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          {...register('email')}
          required
        />
        <TextField
          id="outlined-basic"
          label="Enter password"
          variant="outlined"
          type="password"
          margin="normal"
          fullWidth
          {...register('password')}
          required
          inputProps={{
            minLength: 4,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
          }}
        >
          submit
        </Button>
      </Box>
      {showAlert
        && (
        <MyAlert
          message={alertProps.message}
          severity={alertProps.severity}
        />
        )}
    </Box>
  );
}

export default SignInForm;
