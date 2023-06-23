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
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    )
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
