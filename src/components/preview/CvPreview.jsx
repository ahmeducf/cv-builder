import SectionHeader from './SectionHeader';
import CvHeader from './header/CvHeader';
import EducationContent from './EducationContent';
import ExperienceContent from './ExperienceContent';

function CvPreview({ cvData }) {
  return (
    <div className="cv-preview">
      <CvHeader cvData={cvData} />
      <SectionHeader title="Education" />
      <EducationContent cvData={cvData} />
      <SectionHeader title="Experience" />
      <ExperienceContent cvData={cvData} />
    </div>
  );
}

export default CvPreview;
