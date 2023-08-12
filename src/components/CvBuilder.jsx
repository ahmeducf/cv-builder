import { useState } from 'react';
import EditSidebar from './sidebar/EditSidebar';
import CvPreview from './preview/CvPreview';
import initialCvData from '../data/initial-cv-data';

function CvBuilder() {
  const [cvData, setCvData] = useState(initialCvData);

  return (
    <>
      <EditSidebar cvData={cvData} setCvData={setCvData} />
      <CvPreview cvData={cvData} />
    </>
  );
}

export default CvBuilder;
