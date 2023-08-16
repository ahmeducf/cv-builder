import PropTypes from 'prop-types';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import ContactInfoList from './ContactInfoList';
import ContactInfoItem from './ContactInfoItem';
import './CvHeader.css';

function HeaderSection({ cvData }) {
  const { personalDetails } = cvData;
  const { fullName, email, phoneNumber, address } = personalDetails;

  return (
    <section className="header">
      <div className="full-name">
        <h1>{fullName}</h1>
      </div>
      <ContactInfoList>
        {email && <ContactInfoItem icon={faEnvelope} text={email} />}
        {phoneNumber && <ContactInfoItem icon={faPhone} text={phoneNumber} />}
        {address && <ContactInfoItem icon={faMapMarkerAlt} text={address} />}
      </ContactInfoList>
    </section>
  );
}

HeaderSection.propTypes = {
  cvData: PropTypes.exact({
    personalDetails: PropTypes.exact({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    education: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
    experience: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
  }).isRequired,
};

export default HeaderSection;
