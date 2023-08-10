import Input from '../../common/Input';
import AddButton from '../../common/AddButton';
import CancelButton from '../../common/CancelButton';
import DeleteButton from '../../common/DeleteButton';

function EducationForm() {
  return (
    <form className="education-form">
      <Input label="School" type="text" />
      <Input label="Degree" type="text" />
      <Input label="Location" type="text" />
      <Input label="Start Date" type="date" />
      <Input label="End Date" type="date" />
      <Input label="Description" type="textarea" />

      <AddButton />
      <CancelButton />
      <DeleteButton />
    </form>
  );
}

export default EducationForm;
