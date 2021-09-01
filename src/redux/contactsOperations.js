import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:5555';

const addContact = newContact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export default { addContact };
