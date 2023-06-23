import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title, SubTitle } from '../App/App.styled';
import Loader from 'components/Loader/Loader';
import { Error } from 'components/Error/Error.styled';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import { Layout } from 'components/Layout/Layout';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
    // <Container>
    //   <Title>Phonebook</Title>
    //   <ContactForm />
    //   <SubTitle>Contacts</SubTitle>
    //   <Filter />
    //   {isLoading && <Loader />}
    //   {error && <Error>{error}</Error>}
    //   <ContactList />
    // </Container>
  );
};

export default App;
