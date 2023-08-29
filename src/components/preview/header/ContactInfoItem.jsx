import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactInfoItem.css';

function ContactInfoItem({ icon, text }) {
  return (
    <li className="contact-info__item">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </li>
  );
}

ContactInfoItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfoItem;
