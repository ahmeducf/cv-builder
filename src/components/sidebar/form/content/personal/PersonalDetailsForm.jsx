import Input from '../../common/Input';

function PersonalDetailsForm() {
  <form className="personal-details-form">
    <Input label="Full Name" type="text" />
    <Input label="Email" type="text" />
    <Input label="Phone Number" type="tel" />
    <Input label="Address" type="text" />
  </form>;
}

export default PersonalDetailsForm;
