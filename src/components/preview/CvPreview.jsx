import SectionHeader from './SectionHeader';
import CvHeader from './header/CvHeader';
import EducationContent from './EducationContent';
import ExperienceContent from './ExperienceContent';

function CvPreview() {
  return (
    <div className="cv-preview">
      <CvHeader />
      <SectionHeader title="Education" />
      <EducationContent />
      <SectionHeader title="Experience" />
      <ExperienceContent />
    </div>
  );
}

export default CvPreview;
