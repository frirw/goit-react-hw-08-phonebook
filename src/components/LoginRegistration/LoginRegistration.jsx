import { Link } from 'react-router-dom';
import css from './LoginRegistration.module.css';

export const LoginRegistration = () => {
  return (
    <div>
      <Link className={css.link} to="/register">
        Register
      </Link>
      <Link className={css.link} to="/login">
        Login
      </Link>
    </div>
  );
};
