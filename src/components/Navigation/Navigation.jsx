import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <div className={css.containerH}>
      <Link className={css.linkH} to="/">
        Home
        </Link>
        </div>
      {isLoggedIn && (
        <Link to="/contacts" className={css.linkH}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
