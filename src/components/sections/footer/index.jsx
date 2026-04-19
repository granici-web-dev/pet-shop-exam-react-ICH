import Headline from '../../headline';
import styles from './styles.module.css';
import InstagramIcon from '../../../assets/socials/instagram.svg';
import WhatsAppIcon from '../../../assets/socials/whatsapp.svg';

const socialsIcons = [
  {
    id: 1,
    path: InstagramIcon,
    title: 'Instagram',
    url: 'www.instagram.com',
  },
  {
    id: 2,
    path: WhatsAppIcon,
    title: 'WhatsApp',
    url: 'www.whatsapp.com',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Headline title={'Contact'} />
        <div className={styles.contactGrid}>
          <div className={styles.phone}>
            <span>Phone</span>
            <p>+49 30 915-88492</p>
          </div>

          <div className={styles.socials}>
            <span>Socials</span>
            <ul>
              {socialsIcons.map((icon) => {
                return (
                  <li key={icon.id}>
                    <a href={icon.url}>
                      <img src={icon.path} alt={icon.title} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.address}>
            <span>Address</span>
            <p>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
          </div>

          <div className={styles.hours}>
            <span>Working Hours</span>
            <p>24 hours a day</p>
          </div>
        </div>
        <div>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4!2d13.3585758!3d52.5022839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sru!2sde!4v1"
            loading="lazy"
            title="IT Career Hub"
            allowFullScreen
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
