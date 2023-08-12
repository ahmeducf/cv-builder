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

export default PersonalDetails;
