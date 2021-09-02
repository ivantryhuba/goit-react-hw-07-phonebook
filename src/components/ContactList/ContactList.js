import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import contactsOperations from '../../redux/contactsOperations';
import { connect } from 'react-redux';
import Filter from '../Filter/Filter';
import { Notification } from '../Notification/Notification';
import {
  ContactListStyled,
  ContactItemStyled,
  RemoveBtnStyled,
} from './ContactList.styles';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <>
          <Filter
            id={uuidv4()}
            label={'Find contacts by name'}
            placeholder={'Boris Britva'}
            name={'search'}
          />

          <ContactListStyled>
            {contacts.map(({ id, name, number }) => (
              <ContactItemStyled key={id}>
                {name} : {number}
                <RemoveBtnStyled
                  type="button"
                  onClick={() => onRemoveContact(id)}
                >
                  Remove
                </RemoveBtnStyled>
              </ContactItemStyled>
            ))}
          </ContactListStyled>
        </>
      ) : (
        <Notification text={'You don`t have any contacts'} />
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const getContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ contactList: { contacts, filter } }) => {
  return { contacts: getContacts(contacts, filter) };
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
