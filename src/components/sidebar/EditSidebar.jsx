import { useState } from 'react';
import Nav from './nav/Nav';
import Controls from './controls/Controls';
import Form from './form/Form';
import './EditSidebar.css';

function EditSidebar({ cvData, setCvData }) {
  const [activeNavButton, setActiveNavButton] = useState('content');
  return (
    <div className="edit-sidebar">
      <Nav
        activeButton={activeNavButton}
        setActiveButton={setActiveNavButton}
      />
      <Controls cvData={cvData} setCvData={setCvData} />
      <Form
        activeForm={activeNavButton}
        cvData={cvData}
        setCvData={setCvData}
      />
    </div>
  );
}

export default EditSidebar;
