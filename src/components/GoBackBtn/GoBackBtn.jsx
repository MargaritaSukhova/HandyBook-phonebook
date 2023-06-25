import { Box, Button } from '@mui/material';
import { StyledNavLink } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Button variant="contained">
        {' '}
        <StyledNavLink to="/">Go back</StyledNavLink>
      </Button>
    </Box>
  );
};
