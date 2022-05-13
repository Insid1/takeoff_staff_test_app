import Grid from '@mui/material/Grid';
import RegisterForm from 'components/register-form/register-form';
import { IMyAlert } from 'components/ui/alert-custom';
import { AppRoutes } from 'enums';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { signUp } from 'store/user/thunks';
import type { IRegisterInputs } from 'type';

function SignUp() {
  const navigate = useNavigate();
  const [isAlertShowing, setIsAlertShowing] = useState(false);
  const [alertParams, setAlertParams] = useState<IMyAlert>({
    message: 'You successfully logged in!',
    severity: 'success',
  });
  const dispatch = useAppDispatch();

  const {
    register, handleSubmit, reset,
  } = useForm<IRegisterInputs>();

  const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
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
        setIsAlertShowing(true);
      });
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <RegisterForm
          formTitle="Sign UP!"
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          isAlertShowing={isAlertShowing}
          alertParams={alertParams}
        />
      </Grid>

    </Grid>

  );
}

export default SignUp;
