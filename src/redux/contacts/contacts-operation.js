import axios from "axios";
import {
  createContactsError,
  createContactsRequest,
  createContactsSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  editContactError,
  editContactRequest,
  editContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./contacts-actions";

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const editContact = (contactId, patchedContact) => (dispatch) => {
  dispatch(editContactRequest());
  axios
    .patch(`/contacts/${contactId}`, patchedContact)
    .then((res) => dispatch(editContactSuccess(res.data)))
    .catch((error) => dispatch(editContactError(error)));
};

export const createContact = (contact) => (dispatch) => {
  dispatch(createContactsRequest());
  axios
    .post(`/contacts`, contact)
    .then((res) => dispatch(createContactsSuccess(res.data)))
    .catch((error) => dispatch(createContactsError(error)));
};
