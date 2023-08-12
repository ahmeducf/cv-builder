import './ExperienceContent.css';

function ExperienceItem({ experience }) {
  const { company, position, startDate, endDate, location, description } =
    experience;
  return (
    <div className="experience-content__item">
      <div className="experience-content__item__left">
        <div className="start-end-date">{`${startDate} - ${endDate}`}</div>
        <div className="location">{location}</div>
      </div>
      <div className="experience-content__item__right">
        <div className="company">{company}</div>
        <div className="position">{position}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

function ExperienceContent({ cvData }) {
  const { experience } = cvData;

  return (
    <div className="experience-content">
      {[...experience].map(
        ([id, experience]) =>
          experience.showInResume && (
            <ExperienceItem key={id} experience={experience} />
          ),
      )}
    </div>
  );
}

export default ExperienceContent;
