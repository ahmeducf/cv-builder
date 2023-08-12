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
      />
      <Input
        name="degree"
        label="Degree"
        type="text"
        value={degree}
        onChange={handleChanges}
      />
      <Input
        name="location"
        label="Location"
        type="text"
        value={location}
        onChange={handleChanges}
      />
      <Input
        name="startDate"
        label="Start Date"
        type="date"
        value={startDate}
        onChange={handleChanges}
      />
      <Input
        name="endDate"
        label="End Date"
        type="date"
        value={endDate}
        onChange={handleChanges}
      />
      <Input
        name="description"
        label="Description"
        type="textarea"
        value={description}
        onChange={handleChanges}
      />

      <div className="education-form__buttons">
        <SaveButton onClick={handleAddBtnClick} />
        <CancelButton onClick={handleCancelBtnClick} />
        {id && <DeleteButton onClick={handleDeleteBtnClick} />}
      </div>
    </form>
  );
}

export default EducationForm;
