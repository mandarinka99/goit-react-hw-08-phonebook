import Container from "../Components/container/Container";
import CreateContactForm from "../Components/createContactForm/CreateContactForm";
import FilterContacts from "../Components/filterContacts/FilterContacts";
import ContactsList from "../Components/contactsList/ContactsList";
import { useSelector } from "react-redux";
import Spiner from '../Components/spiner/Spiner';
import { getLoading } from "../redux/contacts/contacts-selectors";

const ContactsPage = () => {
  const loading = useSelector(getLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <CreateContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactsList />
      {loading && <Spiner/>}
    </Container>
  );
};

export default ContactsPage;
