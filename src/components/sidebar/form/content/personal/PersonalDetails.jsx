import PropTypes from 'prop-types';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../Accordion';
import PersonalDetailsForm from './PersonalDetailsForm';
import './PersonalDetails.css';

function PersonalDetails({
  activeAccordion,
  setActiveAccordion,
  cvData,
  setCvData,
}) {
  let active = false;
  if (activeAccordion === 'Personal Details') {
    active = true;
  }

  return (
    <section className="content-form__personal-details">
      <Accordion
        icon={faCircleInfo}
        title="Personal Details"
        active={active}
        setActiveAccordion={setActiveAccordion}
      />
      <PersonalDetailsForm
        active={active}
        cvData={cvData}
        setCvData={setCvData}
      />
    </section>
  );
}

PersonalDetails.propTypes = {
  activeAccordion: PropTypes.string.isRequired,
  setActiveAccordion: PropTypes.func.isRequired,
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
  setCvData: PropTypes.func.isRequired,
};

export default PersonalDetails;
