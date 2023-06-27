import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#013e87"
//     }, secondary: {
//       main: "#274c9",

//       typography: {
//         hi: {
//           fontSize: "3rem", fontWeight: 600,
//         }, h2: {
//           fontSize: "1.75rem", fontweight: 600,
//         }, h3: {
//           fontSize: "1.5rem", fontWeight: 600,
//         }
//       }
//     }
//   }
// })



const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h4" mt={6} align="center">
          Your contacts
        </Typography>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Block> */}
          <TextField
            type="text"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            name="filter"
            margin="normal"
            fullWidth
            label="Find contacts by name"
            autoComplete="Filter"
          />
          {/* <Label htmlFor="filter"> Find contacts by name</Label>
          <Input
            type="text"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
          /> */}
          {/* </Block> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
