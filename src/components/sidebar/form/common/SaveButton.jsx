import PropTypes from 'prop-types';
import './SaveButton.css';

function SaveButton({ onClick }) {
  return (
    <button className="btn save-btn" onClick={onClick}>
      Save
    </button>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
