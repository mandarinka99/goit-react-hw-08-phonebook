import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  filterChange,
  getContactsSuccess,
  deleteContactSuccess,
  createContactsSuccess,
  getContactsRequest,
  getContactsError,
  createContactsRequest,
  createContactsError,
  deleteContactRequest,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from "./contacts-actions";

const items = createReducer([], {
  [createContactsSuccess]: (state, { payload }) => [...state, payload],
  [editContactSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
  [getContactsSuccess]: (_, { payload }) => [...payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [createContactsRequest]: () => true,
  [createContactsSuccess]: () => false,
  [createContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [editContactRequest]: () => true,
  [editContactSuccess]: () => false,
  [editContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
