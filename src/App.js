import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Container } from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { H1Styled, H2Styled } from './App.styles';
import contactsOperations from './redux/contactsOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <H1Styled>PhoneBook</H1Styled>
      <H2Styled>Add contact</H2Styled>
      <ContactForm />

      <H2Styled>Contacts</H2Styled>
      <ContactList />
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return { contacts: () => dispatch(contactsOperations.fetchContacts()) };
};

export default connect(mapDispatchToProps)(App);
