import { useState } from 'react';
import Accordion from '../Accordion';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../common/ListItem';
import FormsContainer from '../../common/FormsContainer';
import ExperienceForm from './ExperienceForm';
import './Experience.css';

function Experience({
  activeAccordion,
  setActiveAccordion,
  cvData,
  setCvData,
}) {
  const [isExperienceForm, setIsExperienceForm] = useState(false);
  const [experienceFormValues, setExperienceFormValues] = useState({
    id: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const { experience: experienceMap } = cvData;

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

      {isExperienceForm ? (
        <ExperienceForm
          active={active}
          setIsExperienceForm={setIsExperienceForm}
          cvData={cvData}
          setCvData={setCvData}
          experienceFormValues={experienceFormValues}
          setExperienceFormValues={setExperienceFormValues}
        />
      ) : (
        <FormsContainer
          section="Experience"
          active={active}
          setIsForm={setIsExperienceForm}
          setFormValues={setExperienceFormValues}
        >
          {[...experienceMap].map(([id, experience]) => {
            return (
              <ListItem
                key={id}
                id={id}
                title={experience.company}
                showInResume={experience.showInResume}
                setIsForm={setIsExperienceForm}
                setFormValues={setExperienceFormValues}
                cvData={cvData}
                setCvData={setCvData}
                section="experience"
              />
            );
          })}
        </FormsContainer>
      )}
    </section>
  );
}

export default Experience;
