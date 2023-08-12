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
      />
      <Input
        name="position"
        label="Position"
        type="text"
        value={position}
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
        type="text"
        value={startDate}
        onChange={handleChanges}
      />
      <Input
        name="endDate"
        label="End Date"
        type="text"
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

      <div className="experience-form__buttons">
        <SaveButton onClick={handleAddBtnClick} />
        <CancelButton onClick={handleCancelBtnClick} />
        {id && <DeleteButton onClick={handleDeleteBtnClick} />}
      </div>
    </form>
  );
}

export default ExperienceForm;
