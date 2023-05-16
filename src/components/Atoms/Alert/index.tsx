import styles from './styles.module.css';

const Alert: React.FC<{ msg: string, error?: boolean }> = ({ msg, error }) => (
  <div className={ error === true ? styles.alert_wrapper_error : styles.alert_wrapper}>
    <p>{msg}</p>
  </div>
);

export default Alert;
