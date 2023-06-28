import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
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
      </Box>
    </Container>
  );
};

export default Filter;
