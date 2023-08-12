import Accordion from '../Accordion';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../common/ListItem';
import FormsContainer from '../../common/FormsContainer';
import './Education.css';

function Education({ activeAccordion, setActiveAccordion }) {
  let active = false;
  if (activeAccordion === 'Education') {
    active = true;
  }

  return (
    <section className="content-form__education">
      <Accordion
        icon={faGraduationCap}
        title="Education"
        active={active}
        setActiveAccordion={setActiveAccordion}
      />

      <FormsContainer section="Education" active={active}>
        <ListItem title="Education 1" showInResume={true} />
        <ListItem title="Education 2" showInResume={false} />
      </FormsContainer>
    </section>
  );
}

export default Education;
