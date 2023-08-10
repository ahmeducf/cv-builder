import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

function ListItem({ title, showInResume }) {
  return (
    <li className="list-item">
      <span>{title}</span>
      <button className="list-item__toggle-btn">
        <FontAwesomeIcon icon={showInResume ? faEye : faEyeSlash} />
      </button>
      <button className="list-item__delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default ListItem;
