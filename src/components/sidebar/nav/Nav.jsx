import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import './Nav.css';

function Nav() {
  return (
    <nav className="edit-sidebar__nav">
      <Button active={true}>
        <FontAwesomeIcon icon={faFileLines} />
        <span>Content</span>
      </Button>
      <Button text="Customize">
        <FontAwesomeIcon icon={faPenRuler} />
        <span>Customize</span>
      </Button>
    </nav>
  );
}

export default Nav;
