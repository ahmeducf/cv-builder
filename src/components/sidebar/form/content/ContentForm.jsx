import Education from './education/Education';
import Experience from './experience/Experience';
import PersonalDetails from './personal/PersonalDetails';

function ContentForm() {
  return (
    <>
      <section className="sidebar__form--content-form">
        <PersonalDetails />
        <Education />
        <Experience />
      </section>
    </>
  );
}

export default ContentForm;
