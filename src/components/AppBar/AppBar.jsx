import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { LoginRegistration } from '../LoginRegistration/LoginRegistration';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoginRegistration />}
    </header>
  );
};
