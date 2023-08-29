import PropTypes from 'prop-types';
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

Controls.propTypes = {
  cvData: PropTypes.exact({
    personalDetails: PropTypes.exact({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    education: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
    experience: PropTypes.objectOf(PropTypes.instanceOf(Map).isRequired)
      .isRequired,
  }).isRequired,
  setCvData: PropTypes.func.isRequired,
  previewRef: PropTypes.object.isRequired,
};

export default Controls;
