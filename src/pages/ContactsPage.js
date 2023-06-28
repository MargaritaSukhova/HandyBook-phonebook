import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Error } from 'components/Error/Error.styled';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Typography mt={6} textAlign={'center'}>
          You don't have contacts yet
        </Typography>
      )}
    </>
  );
}
