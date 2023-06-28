import { Typography } from '@mui/material';
import { StyledNavLink } from './Copyright.styled';

export const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <StyledNavLink to="/">HandyBook </StyledNavLink>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
