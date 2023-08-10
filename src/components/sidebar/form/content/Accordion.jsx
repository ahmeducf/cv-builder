import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion({ icon, title, active }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <FontAwesomeIcon icon={icon} />
        <h1>{title}</h1>
      </div>
      <button className="accordion__button">
        <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
      </button>
    </div>
  );
}

export default Accordion;
