import { useRef, useState } from 'react';
import EditSidebar from './sidebar/EditSidebar';
import CvPreview from './preview/CvPreview';
import initialCvData from '../data/initial-cv-data';

function CvBuilder() {
  const [cvData, setCvData] = useState(initialCvData);
  const previewRef = useRef(null);

  return (
    <>
      <EditSidebar
        cvData={cvData}
        setCvData={setCvData}
        previewRef={previewRef}
      />
      <CvPreview cvData={cvData} previewRef={previewRef} />
    </>
  );
}

export default CvBuilder;
