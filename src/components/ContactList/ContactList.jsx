import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { ContactList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactList>
      <li>{contacts[0].name}</li>
    </ContactList>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onDeleteContact: PropTypes.func.isRequired,
// };
