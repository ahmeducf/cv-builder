import PropTypes from 'prop-types';
import './Input.css';

function Input({ name, label, type, placeholder, value, onChange }) {
  const inputId = label.toLowerCase().split(' ').join('-');

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
