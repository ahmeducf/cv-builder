import Input from '../../common/Input';
import './PersonalDetailsForm.css';

function PersonalDetailsForm() {
  return (
    <form className="personal-details-form">
      <Input label="Full Name" type="text" />
      <Input label="Email" type="text" />
      <Input label="Phone Number" type="tel" />
      <Input label="Address" type="text" />
    </form>
  );
}

export default PersonalDetailsForm;
