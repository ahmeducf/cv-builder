import { useState } from 'react';
import ContentForm from './content/ContentForm';
import CustomizeForm from './customize/CustomizeForm';
import './Form.css';

function Form({ activeForm, cvData, setCvData }) {
  const [activeAccordion, setActiveAccordion] = useState('Personal Details');

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
      <FormComponent
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        cvData={cvData}
        setCvData={setCvData}
      />
    </div>
  );
}

export default Form;
