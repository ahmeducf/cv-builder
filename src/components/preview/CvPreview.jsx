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

export default CvPreview;
