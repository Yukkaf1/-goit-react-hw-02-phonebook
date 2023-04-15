import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { ContactList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {console.log('base:', contacts)}
      <Contact contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
