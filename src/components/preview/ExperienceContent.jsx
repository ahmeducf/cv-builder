import './ExperienceContent.css';

function ExperienceContent() {
  return (
    <div className="experience-content">
      <div className="experience-content__left">
        <div className="start-end-date">{'08/2018 - 06/2020'}</div>
        <div className="location">{'City, Country'}</div>
      </div>
      <div className="experience-content__right">
        <div className="company">{'Company Name'}</div>
        <div className="position">{'Position'}</div>
        <div className="description">{'Description'}</div>
      </div>
    </div>
  );
}

export default ExperienceContent;
