import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import './Nav.css';

function Nav({ activeButton, setActiveButton }) {
  return (
    <nav className="edit-sidebar__nav">
      <Button
        active={activeButton === 'content'}
        onClick={() => setActiveButton('content')}
      >
        <FontAwesomeIcon icon={faFileLines} />
        <span>Content</span>
      </Button>

      <Button
        text="Customize"
        active={activeButton === 'customize'}
        onClick={() => setActiveButton('customize')}
      >
        <FontAwesomeIcon icon={faPenRuler} />
        <span>Customize</span>
      </Button>
    </nav>
  );
}

export default Nav;
