import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'images/logo.svg';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Logo style={{ width: 40, height: 50 }} />
      </NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </nav>
  );
};
