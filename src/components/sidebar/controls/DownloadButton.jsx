import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function DownloadButton() {
  return (
    <button className="btn controls-download-btn">
      <FontAwesomeIcon icon={faDownload} />
      <span>Download Resume</span>
    </button>
  );
}

export default DownloadButton;
