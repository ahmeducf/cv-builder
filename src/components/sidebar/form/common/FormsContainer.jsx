import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './FormsContainer.css';

function FormsContainer({ children, section, active }) {
  return (
    <div className={`forms-container ${active ? 'active' : ''}`}>
      <ul className={`forms-container__${section.toLowerCase()}s}-list`}>
        {children}
      </ul>

      <button className="forms-container__add-button">
        <FontAwesomeIcon icon={faPlus} />
        {section.split('')[0].toUpperCase() + section.slice(1)}
      </button>
    </div>
  );
}

export default FormsContainer;
