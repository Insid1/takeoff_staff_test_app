import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import SignInForm from 'components/sign-in/sign-in-form';

function SignInPage() {
  const [email, setCurrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertProps, setAlertProps] = useState<IMyAlert>({
    message: 'You successfully logged in!',
    severity: 'success',
  });
  const dispatch = useAppDispatch();

  const handleChangeEmail:React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setCurrEmail(evt.target.value);
  };

  const handleChangePassword:React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    dispatch(signIn({ email, password }))
      .unwrap()
      .then(() => {
        setCurrEmail('');
        setPassword('');
        setAlertProps({
          message: 'You successfully logged in!',
          severity: 'success',
        });
      })
      .catch((err) => {
        setAlertProps({
          message: 'err',
          severity: 'error',
        });
      })
      .finally(() => {
        setShowAlert(true);
      });
  };

  return (
    <SignInForm />
  );
}

export default SignInPage;
