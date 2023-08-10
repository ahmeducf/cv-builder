import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../Accordion';
import PersonalDetailsForm from './PersonalDetailsForm';
import './PersonalDetails.css';

function PersonalDetails() {
  return (
    <section className="content-form__personal-details">
      <Accordion icon={faCircleInfo} title="Personal Details" active={true} />
      <PersonalDetailsForm />
    </section>
  );
}

export default PersonalDetails;
