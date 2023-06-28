import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavStyled, StyledNavLink } from './Navigation.styled';
import { ReactComponent as Logo } from 'images/logo.svg';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <NavLink to="/">
        <Logo style={{ width: 50, height: 60 }} />
      </NavLink>
      {isLoggedIn && (
        <Button color="inherit">
          <StyledNavLink to="contacts">Contacts</StyledNavLink>
        </Button>
      )}
    </NavStyled>
  );
};
