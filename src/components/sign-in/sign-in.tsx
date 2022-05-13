import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RegisterForm from 'components/register-form/register-form';
import { IMyAlert } from 'components/ui/alert-custom';
import { AppRoutes } from 'enums';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { signIn } from 'store/user/thunks';
import { IRegisterInputs } from 'type';

const styles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

function SignIn() {
  const [open, setOpen] = useState(false);
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
    dispatch(signIn(data))
      .unwrap()
      .then(() => {
        reset();
        setAlertParams({
          message: 'You successfully logged in!',
          severity: 'success',
        });
        navigate(AppRoutes.Main);
      })
      .catch((err) => {
        setAlertParams({
          message: `OOPS! incorrect data ${err.message}!`,
          severity: 'error',
        });
      })
      .finally(() => {
        setIsAlertShowing(true);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="secondary" variant="contained" onClick={handleOpen}>Sign In</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <RegisterForm
            formTitle="Sign IN!"
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            isAlertShowing={isAlertShowing}
            alertParams={alertParams}
          />
        </Box>
      </Modal>

    </>
  );
}

export default SignIn;
