import Education from './education/Education';
import Experience from './experience/Experience';
import PersonalDetails from './personal/PersonalDetails';
import './ContentForm.css';

function ContentForm({
  activeAccordion,
  setActiveAccordion,
  cvData,
  setCvData,
}) {
  return (
    <>
      <section className="sidebar__form--content-form">
        <PersonalDetails
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
        <Education
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
        <Experience
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          cvData={cvData}
          setCvData={setCvData}
        />
      </section>
    </>
  );
}

export default ContentForm;
