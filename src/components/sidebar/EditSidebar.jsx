import { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav/Nav';
import Controls from './controls/Controls';
import Form from './form/Form';
import './EditSidebar.css';

function EditSidebar({ cvData, setCvData, previewRef }) {
  const [activeNavButton, setActiveNavButton] = useState('content');
  return (
    <div className="edit-sidebar">
      <Nav
        activeButton={activeNavButton}
        setActiveButton={setActiveNavButton}
      />
      <Controls cvData={cvData} setCvData={setCvData} previewRef={previewRef} />
      <Form
        activeForm={activeNavButton}
        cvData={cvData}
        setCvData={setCvData}
      />
    </div>
  );
}

EditSidebar.propTypes = {
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

  previewRef: PropTypes.object.isRequired,
};

export default EditSidebar;
