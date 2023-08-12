import './SaveButton.css';

function SaveButton({ onClick }) {
  return (
    <button className="btn save-btn" onClick={onClick}>
      Save
    </button>
  );
}

export default SaveButton;
