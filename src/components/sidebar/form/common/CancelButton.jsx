import PropTypes from 'prop-types';
import './CancelButton.css';

function CancelButton({ onClick }) {
  return (
    <button type="button" className="btn cancel-btn" onClick={onClick}>
      Cancel
    </button>
  );
}

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CancelButton;
