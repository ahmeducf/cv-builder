import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

function ListItem({
  id,
  title,
  showInResume = true,
  setIsEducationForm,
  setEducationFormValues,
  cvData,
  setCvData,
}) {
  const handleToggleBtnClick = (e) => {
    e.stopPropagation();

    const newCvData = { ...cvData };

    const showInResume = !newCvData.education.get(id).showInResume;
    newCvData.education.get(id).showInResume = showInResume;
    setCvData(newCvData);
  };

  const handleDeleteBtnClick = (e) => {
    e.stopPropagation();

    const newCvData = { ...cvData };
    newCvData.education.delete(id);
    setCvData(newCvData);
  };

  const handleListItemClick = (e) => {
    e.stopPropagation();
    setIsEducationForm(true);

    const education = cvData.education.get(id);
    setEducationFormValues({
      id,
      school: education.school,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate,
      location: education.location,
      description: education.description,
    });
  };

  return (
    <li className="list-item" onClick={handleListItemClick}>
      <span>{title}</span>
      <button className="list-item__toggle-btn" onClick={handleToggleBtnClick}>
        <FontAwesomeIcon icon={showInResume ? faEye : faEyeSlash} />
      </button>
      <button className="list-item__delete-btn" onClick={handleDeleteBtnClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default ListItem;
