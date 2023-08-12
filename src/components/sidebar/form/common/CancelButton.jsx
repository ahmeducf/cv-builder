import './CancelButton.css';

function CancelButton({ onClick }) {
  return (
    <button type="button" className="btn cancel-btn" onClick={onClick}>
      Cancel
    </button>
  );
}

export default CancelButton;
