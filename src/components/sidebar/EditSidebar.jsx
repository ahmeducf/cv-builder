import Nav from './nav/Nav';
import Controls from './controls/Controls';
import Form from './form/Form';
import './EditSidebar.css';

function EditSidebar() {
  return (
    <div className="edit-sidebar">
      <Nav />
      <Controls />
      <Form />
    </div>
  );
}

export default EditSidebar;
