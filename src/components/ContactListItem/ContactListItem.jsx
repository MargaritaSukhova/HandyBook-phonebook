import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { deleteContact } from 'redux/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          type="button"
          edge="end"
          aria-label="delete"
          onClick={() => handleContactDelete(id)}
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ContactPhoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${name}`} />
      <ListItemText primary={`${number}`} sx={{ textAlign: 'end' }} />
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
