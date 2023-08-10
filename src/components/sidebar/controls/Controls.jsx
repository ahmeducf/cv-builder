import ClearButton from './ClearButton';
import DownloadButton from './DownloadButton';
import './Controls.css';

function Controls() {
  return (
    <section className="edit-sidebar__controls">
      <ClearButton />
      <DownloadButton />
    </section>
  );
}

export default Controls;
