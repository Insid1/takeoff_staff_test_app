import { api } from 'api/api';
import { saveToken } from 'api/token';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { setAuth, setEmail } from 'store/user/user-slice';
import { AppRoutes } from 'const';

const API_URL = 'http://localhost:8000/';
interface IUser {
  email: string,
  password: string,
}

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
    api.post(`${API_URL}register`, {
      email,
      password,
    })
      .then((response) => {
        saveToken(response.data.accessToken);
        return response.data;
      })
      .then((data) => {
        dispatch(setEmail(data.user.email));
        dispatch(setAuth(true));
      });
  };

  const getData = () => {
    api.get('660/profiles')
      .then((response) => {
        console.log(response);
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
          onClick={() => { getData(); }}
        />
        <Link to={AppRoutes.Main}>To main!</Link>
      </fieldset>
    </form>
  );
}

export default SignInPage;
