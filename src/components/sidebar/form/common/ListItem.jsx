import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItem({ title, showInResume }) {
  return (
    <li className="list-item">
      <span>{title}</span>
      <button className="btn list-item__toggle-btn">
        <FontAwesomeIcon icon={showInResume ? faEye : faEyeSlash} />
      </button>
      <button className="btn list-item__delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default ListItem;
