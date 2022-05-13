import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MyAlert, { IMyAlert } from 'components/ui/alert-custom';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import type { IRegisterInputs } from 'type';

interface RegisterFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  register: UseFormRegister<IRegisterInputs>,
  isAlertShowing: boolean,
  alertParams: IMyAlert,
  formTitle: string,
}

function RegisterForm({
  onSubmit, register, isAlertShowing, alertParams, formTitle,
}: RegisterFormProps) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
    >
      <Typography
        textAlign="center"
        variant="h4"
        margin={8}
      >
        {formTitle}
      </Typography>

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
      {isAlertShowing
      && (
      <MyAlert
        message={alertParams.message}
        severity={alertParams.severity}
      />
      )}
    </Box>
  );
}

export default RegisterForm;
