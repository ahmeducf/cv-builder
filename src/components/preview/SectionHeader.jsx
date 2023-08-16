import PropTypes from 'prop-types';
import './SectionHeader.css';

function SectionHeader({ title }) {
  return <h2 className="section-header">{title}</h2>;
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
