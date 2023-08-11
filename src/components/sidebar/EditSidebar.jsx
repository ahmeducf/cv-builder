import { useState } from 'react';
import Nav from './nav/Nav';
import Controls from './controls/Controls';
import Form from './form/Form';
import './EditSidebar.css';

function EditSidebar() {
  const [activeNavButton, setActiveNavButton] = useState('content');
  return (
    <div className="edit-sidebar">
      <Nav
        activeButton={activeNavButton}
        setActiveButton={setActiveNavButton}
      />
      <Controls />
      <Form activeForm={activeNavButton} />
    </div>
  );
}

export default EditSidebar;
