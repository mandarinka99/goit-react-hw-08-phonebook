import Container from "../Components/container/Container";
import CreateContactForm from "../Components/createContactForm/CreateContactForm";
import FilterContacts from "../Components/filterContacts/FilterContacts";
import ContactsList from "../Components/contactsList/ContactsList";
import s from "./Pages.module.css";

const ContactsPage = () => {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.formTitle}>Phonebook</h2>
        <div className={s.contactsPage}>
          <CreateContactForm />
          <div>
            <FilterContacts />
            <ContactsList />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactsPage;
