import Input from '../../common/Input';
import SaveButton from '../../common/SaveButton';
import CancelButton from '../../common/CancelButton';
import DeleteButton from '../../common/DeleteButton';

function ExperienceForm() {
  return (
    <form className="experience-form">
      <Input label="Company" type="text" />
      <Input label="Position" type="text" />
      <Input label="Start Date" type="date" />
      <Input label="End Date" type="date" />
      <Input label="Description" type="textarea" />

      <SaveButton />
      <CancelButton />
      <DeleteButton />
    </form>
  );
}

export default ExperienceForm;
