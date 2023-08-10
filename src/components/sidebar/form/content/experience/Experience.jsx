import Accordion from '../Accordion';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../common/ListItem';
import FormsContainer from '../../common/FormsContainer';
import './Experience.css';

function Experience() {
  return (
    <section className="content-form__experience">
      <Accordion icon={faBriefcase} title="Experience" active={false} />

      <FormsContainer section="Experience">
        <ListItem title="Experience 1" showInResume={true} />
        <ListItem title="Experience 2" showInResume={false} />
      </FormsContainer>
    </section>
  );
}

export default Experience;
