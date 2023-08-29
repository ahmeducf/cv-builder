import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './FormsContainer.css';

function FormsContainer({
  children,
  section,
  active,
  setIsForm,
  setFormValues,
}) {
  const handleAddBtnClick = () => {
    setIsForm(true);
    if (section === 'Education') {
      setFormValues({
        id: '',
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      });
    } else if (section === 'Experience') {
      setFormValues({
        id: '',
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      });
    }
  };

  return (
    <div className={`forms-container ${active ? 'active' : ''}`}>
      <ul className={`forms-container__${section.toLowerCase()}s-list`}>
        {children}
      </ul>

      <button
        className="forms-container__add-button"
        onClick={handleAddBtnClick}
      >
        <FontAwesomeIcon icon={faPlus} />
        {section.split('')[0].toUpperCase() + section.slice(1)}
      </button>
    </div>
  );
}

FormsContainer.propTypes = {
  children: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setIsForm: PropTypes.func.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

export default FormsContainer;
