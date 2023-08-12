import ClearButton from './ClearButton';
import DownloadButton from './DownloadButton';
import './Controls.css';

function Controls({ cvData, setCvData }) {
  return (
    <section className="edit-sidebar__controls">
      <ClearButton setCvData={setCvData} />
      <DownloadButton />
    </section>
  );
}

export default Controls;
