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

export default Button;
