import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { AppRoutes } from 'enums';
import { signIn } from 'store/user/thunks';

function SignInPage() {
  const [email, setCurrEmail] = useState('');
  const [password, setPassword] = useState('');
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
      })
      .catch((err) => {
        // throw some error message
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>
          Sign in into account
        </legend>
        <input
          placeholder="Em@il"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          min={3}
        />
        <input
          type="submit"
          value="submit btn"
        />
        <input
          type="button"
          value="get data"
        />
        <Link to={AppRoutes.Main}>To main!</Link>
      </fieldset>
    </form>
  );
}

export default SignInPage;
