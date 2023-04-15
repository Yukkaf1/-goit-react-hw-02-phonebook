import PropTypes from 'prop-types';
import { ContactInfo, Button } from './Contact.styled';

export const Contact = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <СontactItem key={id} className={css.contactsItem}>
        <span>
          {name}: {number}
        </span>
        <Button
          type="button"
          className={css.contactBtn}
          onClick={() => onDeleteContact(id)}
        >
          x
        </Button>
      </СontactItem>
    );
  });
};

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
