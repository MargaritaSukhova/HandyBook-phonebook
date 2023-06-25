import {
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { BtnContainer } from 'components/BtnContainer/BtnContainer.styled';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'start',
//     flexDirection: 'column',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

const defaultTheme = createTheme();

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <ThemeProvider theme={defaultTheme}>
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
          {/* <h2>The free and easy way to collect phone numbers</h2>
      <p>
        The best tool to help you collect the phone numbers from friends and
        family
      </p> */}
          <BtnContainer>
            <Button
              variant="contained"
              onClick={handleLogIn}
              sx={{ width: 120 }}
            >
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
    </ThemeProvider>
  );
}
