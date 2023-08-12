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

export default ContactInfoItem;
