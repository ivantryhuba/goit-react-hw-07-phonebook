import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContact,
  changeFilter,
} from './contactsActions';

const contacts = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
