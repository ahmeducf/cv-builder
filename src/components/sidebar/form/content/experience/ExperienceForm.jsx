import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../common/Input';
import SaveButton from '../../common/SaveButton';
import CancelButton from '../../common/CancelButton';
import DeleteButton from '../../common/DeleteButton';
import './ExperienceForm.css';

function ExperienceForm({
  active,
  setIsExperienceForm,
  cvData,
  setCvData,
  experienceFormValues,
  setExperienceFormValues,
}) {
  const { id, company, position, location, startDate, endDate, description } =
    experienceFormValues;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setExperienceFormValues({ ...experienceFormValues, [name]: value });
  };

  const handleAddBtnClick = (e) => {
    e.preventDefault();

    const newCvData = { ...cvData };

    const newId = id || uuidv4();
    newCvData.experience.set(newId, {
      newId,
      company,
      position,
      startDate,
      endDate,
      description,
      location,
      showInResume: true,
    });

    setCvData(newCvData);
    setIsExperienceForm(false);
  };

  const handleCancelBtnClick = (e) => {
    e.preventDefault();

    setIsExperienceForm(false);
  };

  const handleDeleteBtnClick = (e) => {
    e.preventDefault();

    const newCvData = { ...cvData };
    newCvData.experience.delete(id);

    setCvData(newCvData);
    setIsExperienceForm(false);
  };

  return (
    <form className={`experience-form ${active ? 'active' : ''}`}>
      <Input
        name="company"
        label="Company"
        type="text"
        value={company}
        onChange={handleChanges}
        placeholder={'e.g. Google'}
      />
      <Input
        name="position"
        label="Position"
        type="text"
        value={position}
        onChange={handleChanges}
        placeholder={'e.g. Software Engineer'}
      />
      <Input
        name="location"
        label="Location"
        type="text"
        value={location}
        onChange={handleChanges}
        placeholder={'e.g. Mountain View, CA'}
      />
      <Input
        name="startDate"
        label="Start Date"
        type="text"
        value={startDate}
        onChange={handleChanges}
        placeholder={'e.g. January 2019'}
      />
      <Input
        name="endDate"
        label="End Date"
        type="text"
        value={endDate}
        onChange={handleChanges}
        placeholder={'e.g. Present'}
      />
      <Input
        name="description"
        label="Description"
        type="textarea"
        value={description}
        onChange={handleChanges}
        placeholder={'e.g. I did a lot of things...'}
      />

      <div className="experience-form__buttons">
        <SaveButton onClick={handleAddBtnClick} />
        <CancelButton onClick={handleCancelBtnClick} />
        {id && <DeleteButton onClick={handleDeleteBtnClick} />}
      </div>
    </form>
  );
}

ExperienceForm.propTypes = {
  active: PropTypes.bool.isRequired,
  setIsExperienceForm: PropTypes.func.isRequired,
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
  experienceFormValues: PropTypes.exact({
    id: PropTypes.string,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setExperienceFormValues: PropTypes.func.isRequired,
};

export default ExperienceForm;
