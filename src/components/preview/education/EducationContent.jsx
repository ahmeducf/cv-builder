import './EducationContent.css';

function EducationItem({ education }) {
  const { school, degree, startDate, endDate, location, description } =
    education;
  return (
    <div className="education-content__item">
      <div className="education-content__item__left">
        <div className="start-end-date">{`${startDate} - ${endDate}`}</div>
        <div className="location">{location}</div>
      </div>
      <div className="education-content__item__right">
        <div className="school">{school}</div>
        <div className="degree">{degree}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

function EducationContent({ cvData }) {
  const { education } = cvData;
  const educationArray = Array.from(education.values());
  return (
    <div className="education-content">
      {educationArray.map(
        (education) =>
          education.showInResume && (
            <EducationItem key={education.id} education={education} />
          ),
      )}
    </div>
  );
}

export default EducationContent;
