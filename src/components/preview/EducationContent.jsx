import './EducationContent.css';

function EducationContent() {
  return (
    <div className="education-content">
      <div className="education-content__left">
        <div className="start-end-date">{'08/2018 - 06/2020'}</div>
        <div className="location">{'City, Country'}</div>
      </div>
      <div className="education-content__right">
        <div className="school">{'School Name'}</div>
        <div className="degree">{'Degree'}</div>
        <div className="description">{'Description'}</div>
      </div>
    </div>
  );
}

export default EducationContent;
