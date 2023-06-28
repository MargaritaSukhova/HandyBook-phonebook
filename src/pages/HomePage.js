import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BtnContainer } from 'components/BtnContainer/BtnContainer.styled';

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ mb: 10 }}>
          Handy Contact Book
        </Typography>
        <Typography variant="h5" sx={{ mb: 6 }}>
          The free and easy way to collect phone numbers
        </Typography>
        <Typography variant="h6" sx={{ mb: 10 }}>
          The best tool to help you collect the phone numbers from friends and
          family
        </Typography>
        <BtnContainer>
          <Button variant="contained" onClick={handleLogIn} sx={{ width: 120 }}>
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={handleRegister}
            sx={{ width: 120 }}
          >
            Register
          </Button>
        </BtnContainer>
      </Box>
    </Container>
  );
}
