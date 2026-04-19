import styles from './styles.module.css';
import NotFoundImage from '../../assets/images/404.png';
import Headline from '../../components/headline';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button';

function NotFound() {
  const navigate = useNavigate();

   const setNavigate = (path) => {
     navigate(`/${path}`);
   };

  return (
    <section className={styles.notFound}>
      <div className={styles.container}>
        <img className={styles.notFoundImage} src={NotFoundImage} alt="404" />
        <div className={styles.contentDiv}>
          <Headline title={'Page Not Found'} />
          <p className={styles.notFoundText}>
            We’re sorry, the page you requested could not be found. Please go back to the homepage.
          </p>
          <Button onClick={() => setNavigate('/')} title={'Go Home'} />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
