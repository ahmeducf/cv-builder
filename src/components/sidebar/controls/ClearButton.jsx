import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ClearButton.css';

function ClearButton({ setCvData }) {
  const clearResume = () => {
    setCvData({
      personalDetails: {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
      },
      education: new Map(),
      experience: new Map(),
    });
  };

  return (
    <button className="btn controls__clear-btn" onClick={clearResume}>
      <FontAwesomeIcon icon={faTrash} />
      <span>Clear Resume</span>
    </button>
  );
}

ClearButton.propTypes = {
  setCvData: PropTypes.func.isRequired,
};

export default ClearButton;
