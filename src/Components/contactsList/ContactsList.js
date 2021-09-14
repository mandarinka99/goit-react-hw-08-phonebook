import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContactsSelector } from "../../redux/contacts/contacts-selectors";
import {
  getContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operation";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import EditContactModal from "../editConnactModal/EditContactModal";

const ContactsList = () => {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState();
  const filteredContacts = useSelector(getFilterContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleClickOpen = (contact) => {
    setContact(contact);
    console.log(`contact`, contact);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            {contact.name} {contact.number}{" "}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleClickOpen(contact)}
              size="small"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => dispatch(deleteContact(contact.id))}
              size="small"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {open && <EditContactModal handleClose={handleClose} contact={contact} />}
    </div>
  );
};

export default ContactsList;
