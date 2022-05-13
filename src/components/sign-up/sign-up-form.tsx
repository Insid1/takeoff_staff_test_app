import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { AppRoutes } from 'enums';
import { signUp } from 'store/user/thunks';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IMyAlert } from 'components/ui/alert-custom';
import { useForm, SubmitHandler } from 'react-hook-form';
import SignUpCustom from 'components/ui/sign-up-custom';

type UserInputs = {
  email: string,
  password: string,
};

function SignInForm() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertParams, setAlertParams] = useState<IMyAlert>({
    message: 'You successfully logged in!',
    severity: 'success',
  });
  const dispatch = useAppDispatch();

  const {
    register, handleSubmit, reset,
  } = useForm<UserInputs>();

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        reset();
        setAlertParams({
          message: 'You successfully logged in!',
          severity: 'success',
        });
        navigate(AppRoutes.Main);
      })
      .catch(() => {
        setAlertParams({
          message: 'User already exist or invalid data!',
          severity: 'error',
        });
      })
      .finally(() => {
        setShowAlert(true);
      });
  };

  return (
    <SignUpCustom
      onSubmit={handleSubmit(onSubmit)}
      showAlert={showAlert}
      alertParams={alertParams}
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
    </SignUpCustom>
  );
}

export default SignInForm;
