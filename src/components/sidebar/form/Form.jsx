import ContentForm from './content/ContentForm';
import CustomizeForm from './customize/CustomizeForm';
import './Form.css';

function Form({ activeForm }) {
  let FormComponent;
  switch (activeForm) {
    case 'content':
      FormComponent = ContentForm;
      break;
    case 'customize':
      FormComponent = CustomizeForm;
      break;
  }

  return (
    <div className="edit-sidebar__form">
      <FormComponent />
    </div>
  );
}

export default Form;
