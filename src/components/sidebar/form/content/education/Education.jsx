import { useState } from 'react';
import Accordion from '../Accordion';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../common/ListItem';
import FormsContainer from '../../common/FormsContainer';
import EducationForm from './EducationForm';
import './Education.css';

function Education({ activeAccordion, setActiveAccordion, cvData, setCvData }) {
  const [isEducationForm, setIsEducationForm] = useState(false);
  const [educationFormValues, setEducationFormValues] = useState({
    id: '',
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });
  const { education: educationMap } = cvData;

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

      {isEducationForm ? (
        <EducationForm
          active={active}
          setIsEducationForm={setIsEducationForm}
          cvData={cvData}
          setCvData={setCvData}
          educationFormValues={educationFormValues}
          setEducationFormValues={setEducationFormValues}
        />
      ) : (
        <FormsContainer
          section="Education"
          active={active}
          setIsEducationForm={setIsEducationForm}
          setEducationFormValues={setEducationFormValues}
        >
          {[...educationMap].map(([id, education]) => {
            return (
              <ListItem
                key={id}
                id={id}
                title={education.school}
                showInResume={education.showInResume}
                setIsEducationForm={setIsEducationForm}
                setEducationFormValues={setEducationFormValues}
                cvData={cvData}
                setCvData={setCvData}
              />
            );
          })}
        </FormsContainer>
      )}
    </section>
  );
}

export default Education;
