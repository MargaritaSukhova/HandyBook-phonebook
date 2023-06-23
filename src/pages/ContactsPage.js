import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

export default function ContactsPage() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <ContactForm />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />
    </>
  );
}
