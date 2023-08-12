import { useState } from 'react';
import EditSidebar from './sidebar/EditSidebar';
import CvPreview from './preview/CvPreview';

function CvBuilder() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
    education: [],
    experience: [],
  });

  return (
    <>
      <EditSidebar cvData={cvData} setCvData={setCvData} />
      <CvPreview cvData={cvData} />
    </>
  );
}

export default CvBuilder;
