import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Box, Container, Grid } from '@mui/material';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={4} md={4}>
          {filteredContacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <ContactListItem key={id} id={id} name={name} number={number} />
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactList;
