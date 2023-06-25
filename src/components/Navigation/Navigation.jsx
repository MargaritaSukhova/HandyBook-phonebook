import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'images/logo.svg';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@mui/material';
import { NavStyled, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <NavLink to="/">
        <Logo style={{ width: 40, height: 50 }} />
      </NavLink>
      {isLoggedIn && (
        <Button color="inherit">
          <StyledNavLink to="contacts">Contacts</StyledNavLink>
        </Button>
      )}
    </NavStyled>
  );
};
