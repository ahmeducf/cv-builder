import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

function Nav() {
  return (
    <nav>
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
