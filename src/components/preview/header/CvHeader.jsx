import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import ContactInfoList from './ContactInfoList';
import ContactInfoItem from './ContactInfoItem';

function HeaderSection() {
  return (
    <section className="header">
      <div className="full-name">
        <h1>John Doe</h1>
      </div>
      <ContactInfoList>
        <ContactInfoItem icon={faEnvelope} text="email@email.com" />
        <ContactInfoItem icon={faPhone} text="+1 234 567 890" />
        <ContactInfoItem icon={faMapMarkerAlt} text="City, Country" />
      </ContactInfoList>
    </section>
  );
}

export default HeaderSection;
