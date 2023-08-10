function Button({ children, active = false, onClick }) {
  return (
    <button
      className={`btn btn-nav ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
