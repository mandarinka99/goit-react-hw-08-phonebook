import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/contacts-operation";
import { getContactsSelector } from "../../redux/contacts/contacts-selectors";

const EditContactModal = ({ handleClose, contact: initialState }) => {
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
    dispatch(
      editContact(contact.id, {
        name: contact.name,
        number: contact.number,
      })
    );
    handleClose();
  };
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            id="name"
            label="Name"
            type="text"
            value={contact.name}
            fullWidth
            onChange={onHandleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Number"
            type="text"
            value={contact.number}
            name="number"
            onChange={onHandleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} color="primary" size="small">
            Edit
          </Button>
          <Button onClick={handleClose} color="primary" size="small">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditContactModal;
