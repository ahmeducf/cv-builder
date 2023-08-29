import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../common/Input';
import SaveButton from '../../common/SaveButton';
import CancelButton from '../../common/CancelButton';
import DeleteButton from '../../common/DeleteButton';
import './EducationForm.css';

function EducationForm({
  active,
  setIsEducationForm,
  cvData,
  setCvData,
  educationFormValues,
  setEducationFormValues,
}) {
  const { id, school, degree, startDate, endDate, location, description } =
    educationFormValues;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setEducationFormValues({ ...educationFormValues, [name]: value });
  };

  const handleAddBtnClick = (e) => {
    e.preventDefault();

    const newCvData = { ...cvData };

    const newId = id || uuidv4();
    newCvData.education.set(newId, {
      newId,
      school,
      degree,
      startDate,
      endDate,
      location,
      description,
      showInResume: true,
    });

    setCvData(newCvData);
    setIsEducationForm(false);
  };

  const handleCancelBtnClick = (e) => {
    e.preventDefault();

    setIsEducationForm(false);
  };

  const handleDeleteBtnClick = (e) => {
    e.preventDefault();

    const newCvData = { ...cvData };
    newCvData.education.delete(id);

    setCvData(newCvData);
    setIsEducationForm(false);
  };

  return (
    <form className={`education-form ${active ? 'active' : ''}`}>
      <Input
        name="school"
        label="School"
        type="text"
        value={school}
        onChange={handleChanges}
        placeholder={'e.g. University of California, Berkeley'}
      />
      <Input
        name="degree"
        label="Degree"
        type="text"
        value={degree}
        onChange={handleChanges}
        placeholder={'e.g. Bachelor of Science'}
      />
      <Input
        name="location"
        label="Location"
        type="text"
        value={location}
        onChange={handleChanges}
        placeholder={'e.g. Berkeley, CA'}
      />
      <Input
        name="startDate"
        label="Start Date"
        type="text"
        value={startDate}
        onChange={handleChanges}
        placeholder={'e.g. 08/2015'}
      />
      <Input
        name="endDate"
        label="End Date"
        type="text"
        value={endDate}
        onChange={handleChanges}
        placeholder={'e.g. 05/2019'}
      />
      <Input
        name="description"
        label="Description"
        type="textarea"
        value={description}
        onChange={handleChanges}
        placeholder={
          'e.g. Relevant coursework: Data Structures, Algorithms, Machine Learning, etc.'
        }
      />

      <div className="education-form__buttons">
        <SaveButton onClick={handleAddBtnClick} />
        <CancelButton onClick={handleCancelBtnClick} />
        {id && <DeleteButton onClick={handleDeleteBtnClick} />}
      </div>
    </form>
  );
}

EducationForm.propTypes = {
  active: PropTypes.bool.isRequired,
  setIsEducationForm: PropTypes.func.isRequired,
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
  educationFormValues: PropTypes.exact({
    id: PropTypes.string,
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setEducationFormValues: PropTypes.func.isRequired,
};

export default EducationForm;
