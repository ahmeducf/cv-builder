import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton() {
  return (
    <button className="btn delete-btn">
      <FontAwesomeIcon icon={faTrash} />
      <span>Delete</span>
    </button>
  );
}

export default DeleteButton;
