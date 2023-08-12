import Accordion from '../Accordion';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../common/ListItem';
import FormsContainer from '../../common/FormsContainer';
import './Experience.css';

function Experience({ activeAccordion, setActiveAccordion }) {
  let active = false;
  if (activeAccordion === 'Experience') {
    active = true;
  }

  return (
    <section className="content-form__experience">
      <Accordion
        icon={faBriefcase}
        title="Experience"
        active={active}
        setActiveAccordion={setActiveAccordion}
      />

      <FormsContainer section="Experience" active={active}>
        <ListItem title="Experience 1" showInResume={true} />
        <ListItem title="Experience 2" showInResume={false} />
      </FormsContainer>
    </section>
  );
}

export default Experience;
