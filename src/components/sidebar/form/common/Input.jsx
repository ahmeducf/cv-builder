import './Input.css';

function Input({ name, label, type, value, onChange }) {
  const inputId = label.toLowerCase().split(' ').join('-');

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
