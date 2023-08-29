import PropTypes from 'prop-types';
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

Form.propTypes = {
  activeForm: PropTypes.string.isRequired,
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
};

export default Form;
