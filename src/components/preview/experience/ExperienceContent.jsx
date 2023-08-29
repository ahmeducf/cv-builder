import PropTypes from 'prop-types';
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

ExperienceItem.propTypes = {
  experience: PropTypes.exact({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showInResume: PropTypes.bool.isRequired,
  }).isRequired,
};

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

ExperienceContent.propTypes = {
  cvData: PropTypes.exact({
    personalDetails: PropTypes.exact({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    education: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
    experience: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
  }).isRequired,
};

export default ExperienceContent;
