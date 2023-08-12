import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './FormsContainer.css';

function FormsContainer({
  children,
  section,
  active,
  setIsEducationForm,
  setEducationFormValues,
}) {
  const handleAddBtnClick = () => {
    setIsEducationForm(true);
    setEducationFormValues({
      id: '',
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
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

export default FormsContainer;
