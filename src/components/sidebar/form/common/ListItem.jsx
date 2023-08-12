import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

function ListItem({
  id,
  title,
  showInResume = true,
  setIsForm,
  setFormValues,
  cvData,
  setCvData,
  section,
}) {
  const handleToggleBtnClick = (e) => {
    e.stopPropagation();

    const newCvData = { ...cvData };

    if (section === 'experience') {
      const experience = newCvData.experience.get(id);
      experience.showInResume = !experience.showInResume;
    } else if (section === 'education') {
      const education = newCvData.education.get(id);
      education.showInResume = !education.showInResume;
    }

    setCvData(newCvData);
  };

  const handleDeleteBtnClick = (e) => {
    e.stopPropagation();

    const newCvData = { ...cvData };

    if (section === 'experience') {
      newCvData.experience.delete(id);
    } else if (section === 'education') {
      newCvData.education.delete(id);
    }

    setCvData(newCvData);
  };

  const handleListItemClick = (e) => {
    e.stopPropagation();
    setIsForm(true);

    const newCvData = { ...cvData };

    if (section === 'experience') {
      const experience = newCvData.experience.get(id);
      experience.id = id;
      setFormValues(experience);
    } else if (section === 'education') {
      const education = newCvData.education.get(id);
      education.id = id;
      setFormValues(education);
    }

    setCvData(newCvData);
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
