import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
      <div className={styles['lds-dual-ring']} />
    </div>
  );
}

export default Loader;
