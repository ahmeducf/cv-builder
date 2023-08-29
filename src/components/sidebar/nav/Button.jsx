import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, active = false, onClick }) {
  return (
    <button
      className={`btn nav__btn ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
