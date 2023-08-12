import ClearButton from './ClearButton';
import DownloadButton from './DownloadButton';
import './Controls.css';

function Controls({ cvData, setCvData, previewRef }) {
  return (
    <section className="edit-sidebar__controls">
      <ClearButton setCvData={setCvData} />
      <DownloadButton previewRef={previewRef} />
    </section>
  );
}

export default Controls;
