import s from "./CreateContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../../redux/contacts/contacts-operation";
import { useState } from "react";
import { getContactsSelector } from "../../redux/contacts/contacts-selectors";
import { Button, TextField } from "@material-ui/core";

const initialState = {
  name: "",
  number: "",
};

const CreateContactForm = () => {
  const [contact, setContact] = useState({ ...initialState });
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const find = contacts.find(
      (newContact) =>
        newContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (find) return alert(`${contact.name} is already in contacts`);
    dispatch(createContact({ name: contact.name, number: contact.number }));
    setContact({
      name: "",
      number: "",
    });
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={onSubmit} className={s.form}>
        <TextField
          type="name"
          name="name"
          value={contact.name}
          onChange={onHandleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          label="Name"
          required
          variant="outlined"
          size="small"
          className={s.formInp}
        />
        <TextField
          type="tel"
          name="number"
          value={contact.number}
          onChange={onHandleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          label="Number"
          required
          variant="outlined"
          size="small"
          className={s.formInp}
        />

        <Button
          type="submit"
          color="primary"
          size="small"
          variant="outlined"
          className={s.formBtn}
        >
          ADD CONTACT
        </Button>
      </form>
    </div>
  );
};

export default CreateContactForm;
