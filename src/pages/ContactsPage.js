import Container from "../Components/container/Container";
import CreateContactForm from "../Components/createContactForm/CreateContactForm";
import FilterContacts from "../Components/filterContacts/FilterContacts";
import ContactsList from "../Components/contactsList/ContactsList";

const ContactsPage = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <CreateContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
