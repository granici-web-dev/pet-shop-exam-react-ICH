import styles from './styles.module.css'

function Headline({title}) {
  return <h2 className={styles.headline}>{title}</h2>
}

export default Headline;