import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import EditSidebar from './sidebar/EditSidebar';
import CvPreview from './preview/CvPreview';

function CvBuilder() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: 'Ahmed Salah',
      email: 'ahmedsalah@gmail.com',
      phoneNumber: '+201111111111',
      address: 'El-Mahalla El-Kobra, Egypt',
    },
    education: new Map([
      [
        uuidv4(),
        {
          school: 'Mansoura University',
          degree: 'Bachelor of Engineering',
          startDate: '2018-09-01',
          endDate: '2023-07-04',
          location: 'Mansoura, Egypt',
          description: 'I studied Computer and Systems Engineering',
          showInResume: true,
        },
      ],
    ]),
    experience: new Map([
      [
        uuidv4(),
        {
          company: 'Codescalers',
          position: 'Intern Software Engineer',
          startDate: '2022-07-01',
          endDate: '2022-09-30',
          location: 'Cairo, Egypt',
          description: 'I worked on a project go and react',
          showInResume: true,
        },
      ],
    ]),
  });

  return (
    <>
      <EditSidebar cvData={cvData} setCvData={setCvData} />
      <CvPreview cvData={cvData} />
    </>
  );
}

export default CvBuilder;
