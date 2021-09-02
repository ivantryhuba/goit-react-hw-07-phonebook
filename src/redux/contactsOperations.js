import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:5555';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = newContact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};
export default { fetchContacts, addContact, removeContact };
