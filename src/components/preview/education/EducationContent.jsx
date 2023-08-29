import PropTypes from 'prop-types';
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

EducationItem.propTypes = {
  education: PropTypes.exact({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showInResume: PropTypes.bool.isRequired,
  }).isRequired,
};

function EducationContent({ cvData }) {
  const { education } = cvData;
  return (
    <div className="education-content">
      {[...education].map(
        ([id, education]) =>
          education.showInResume && (
            <EducationItem key={id} education={education} />
          ),
      )}
    </div>
  );
}

EducationContent.propTypes = {
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

export default EducationContent;
