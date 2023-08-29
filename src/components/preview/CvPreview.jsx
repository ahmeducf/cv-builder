import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import CvHeader from './header/CvHeader';
import EducationContent from './education/EducationContent';
import ExperienceContent from './experience/ExperienceContent';
import './CvPreview.css';

function CvPreview({ cvData, previewRef }) {
  return (
    <div className="cv-preview-container" ref={previewRef}>
      <div className="cv-preview">
        <CvHeader cvData={cvData} />
        <SectionHeader title="Education" />
        <EducationContent cvData={cvData} />
        <SectionHeader title="Experience" />
        <ExperienceContent cvData={cvData} />
      </div>
    </div>
  );
}

CvPreview.propTypes = {
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
  previewRef: PropTypes.object.isRequired,
};

export default CvPreview;
