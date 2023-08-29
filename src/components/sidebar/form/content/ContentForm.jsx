import PropTypes from 'prop-types';
import Education from './education/Education';
import Experience from './experience/Experience';
import PersonalDetails from './personal/PersonalDetails';
import './ContentForm.css';

function ContentForm({
  activeAccordion,
  setActiveAccordion,
  cvData,
  setCvData,
}) {
  return (
    <>
      <section className="sidebar__form--content-form">
        <PersonalDetails
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
        <Education
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
        <Experience
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
      </section>
    </>
  );
}

ContentForm.propTypes = {
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

export default ContentForm;
