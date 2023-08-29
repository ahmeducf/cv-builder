import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Accordion.css';

function Accordion({ icon, title, active, setActiveAccordion }) {
  const handleOnClick = () => {
    if (active) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(title);
    }
  };

  return (
    <div className="accordion" onClick={handleOnClick}>
      <div className="accordion__title">
        <FontAwesomeIcon icon={icon} />
        <h1>{title}</h1>
      </div>
      <button
        className={`accordion__button ${active ? 'active' : ''}`}
        onClick={handleOnClick}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
}

Accordion.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActiveAccordion: PropTypes.func.isRequired,
};

export default Accordion;
