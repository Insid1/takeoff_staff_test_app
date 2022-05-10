import { Link } from 'react-router-dom';
import { AppRoutes } from 'enums';

function UserList() {
  return (
    <>
      <div>UserList</div>
      <Link to={AppRoutes.SignIn}> to sign in</Link>
    </>
  );
}

export default UserList;
