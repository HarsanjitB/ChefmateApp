import styles from "./Component5Container.module.css";

const Component5Container = () => {
  return (
    <div className={styles.component5Container}>
      <div className={styles.label}>Rate recipe</div>
      <div className={styles.starParent}>
        <img className={styles.frameChild} alt="" src="/star-6.svg" />
        <img className={styles.frameChild} alt="" src="/star-6.svg" />
        <img className={styles.frameChild} alt="" src="/star-6.svg" />
        <img className={styles.frameChild} alt="" src="/star-6.svg" />
        <img className={styles.frameChild} alt="" src="/star-6.svg" />
      </div>
      <div className={styles.smallButton}>
        <div className={styles.label}>Send</div>
      </div>
    </div>
  );
};

export default Component5Container;
