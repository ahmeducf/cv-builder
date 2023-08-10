import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ClearButton.css';

function ClearButton() {
  return (
    <button className="btn controls__clear-btn">
      <FontAwesomeIcon icon={faTrash} />
      <span>Clear Resume</span>
    </button>
  );
}

export default ClearButton;
