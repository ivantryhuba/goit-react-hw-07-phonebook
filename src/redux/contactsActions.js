import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const removeContactRequest = createAction();
// const removeContactSuccess = createAction();
// const removeContactError = createAction();

export const removeContact = createAction('contacts/remove');
export const changeFilter = createAction('contacts/changeFilter');
