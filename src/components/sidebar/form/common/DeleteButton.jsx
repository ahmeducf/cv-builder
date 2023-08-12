import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DeleteButton.css';

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="btn delete-btn" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
      <span>Delete</span>
    </button>
  );
}

export default DeleteButton;
