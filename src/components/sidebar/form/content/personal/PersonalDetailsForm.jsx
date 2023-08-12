import Input from '../../common/Input';
import './PersonalDetailsForm.css';

function PersonalDetailsForm({ active, cvData, setCvData }) {
  const { personalDetails } = cvData;
  const { fullName, email, phoneNumber, address } = personalDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevState) => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value,
      },
    }));
  };

  return (
    <form className={`personal-details-form ${active ? 'active' : ''}`}>
      <Input
        name="fullName"
        label="Full Name"
        type="text"
        value={fullName}
        onChange={handleChange}
        placeholder={'e.g. John Doe'}
      />
      <Input
        name="email"
        label="Email"
        type="text"
        value={email}
        onChange={handleChange}
        placeholder={'e.g. johndoe@gmail.com'}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={handleChange}
        placeholder={'e.g. 123-456-7890'}
      />
      <Input
        name="address"
        label="Address"
        type="text"
        value={address}
        onChange={handleChange}
        placeholder={'e.g. 1234 Main St, San Francisco, CA 94123'}
      />
    </form>
  );
}

export default PersonalDetailsForm;
