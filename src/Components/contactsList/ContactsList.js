import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContactsSelector } from "../../redux/contacts/contacts-selectors";
import {
  getContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operation";
import { useEffect, useState } from "react";
import { Button, ListItem, ListItemText } from "@material-ui/core";
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
      <h2 className={s.item}>Your contacts</h2>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <ListItem button key={contact.id} className={s.listItem}>
            <ListItemText
              primary={`${contact.name} ${contact.number}`}
              className={s.itemText}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleClickOpen(contact)}
              size="small"
              className={s.btn}
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
          </ListItem>
        ))}
      </ul>
      {open && <EditContactModal handleClose={handleClose} contact={contact} />}
    </div>
  );
};

export default ContactsList;
