import { v4 as uuidv4 } from 'uuid';
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
    education: new Map([
      [
        uuidv4(),
        {
          school: 'Mansoura University',
          degree: 'Bachelor of Engineering',
          startDate: '2015-09-01',
          endDate: '2020-09-01',
          location: 'Mansoura, Egypt',
          description: 'I studied Computer and Systems Engineering',
          showInResume: true,
        },
      ],
    ]),
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
