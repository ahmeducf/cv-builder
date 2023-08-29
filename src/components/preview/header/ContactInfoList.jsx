import PropTypes from 'prop-types';
import './ContactInfoList.css';

function ContactInfoList({ children }) {
  return <ul className="header__contact-info">{children}</ul>;
}

ContactInfoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactInfoList;
