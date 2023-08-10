import './Input.css';

function Input({ label, type }) {
  const inputId = label.toLowerCase().split(' ').join('-');

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{label}</label>
      <input type={type} id={inputId} name={inputId} />
    </div>
  );
}

export default Input;
