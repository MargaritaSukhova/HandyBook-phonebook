import { SubTitle } from 'components/App/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Error } from 'components/Error/Error.styled';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      <ContactList />
    </>
  );
}
