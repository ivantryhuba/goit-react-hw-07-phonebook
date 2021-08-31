import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5555';

const fetchContacts = () => {
  return axios.get('/contacts').then(res => res.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const removeContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

const updateContact = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};

export default { fetchContacts, addContact, removeContact, updateContact };
