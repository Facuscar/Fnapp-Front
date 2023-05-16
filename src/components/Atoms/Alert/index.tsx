import styles from './styles.module.css';

const Alert: React.FC<{ msg: string }> = ({ msg }) => (
  <div className={styles.alert_wrapper}>
    <p>{msg}</p>
  </div>
);

export default Alert;
