import { Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserMenyContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenyContainer>
      <Typography>Hey, {user.name}</Typography>
      <Button color="inherit" onClick={handleLogOut}>
        Logout
      </Button>
    </UserMenyContainer>
  );
};
