import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./EditContactModal.module.css";
import { editContact } from "../../redux/contacts/contacts-operation";

const EditContactModal = ({ handleClose, contact: initialState }) => {
  const [contact, setContact] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
            name="name"
            id="name"
            label="Name"
            type="text"
            value={contact.name}
            variant="outlined"
            fullWidth
            onChange={onHandleChange}
            className={s.formInp}
          />
          <TextField
            autoFocus
            id="number"
            label="Number"
            type="text"
            value={contact.number}
            name="number"
            variant="outlined"
            onChange={onHandleChange}
            fullWidth
            className={s.formInp}
          />
        </DialogContent>
        <DialogActions className={s.formBtns}>
          <Button
            onClick={onSubmit}
            color="primary"
            variant="outlined"
            size="small"
          >
            Edit
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditContactModal;
