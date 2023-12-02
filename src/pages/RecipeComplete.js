import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeComplete.module.css";

const RecipeComplete = () => {
  const navigate = useNavigate();

  const onAddTimerContainer1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.recipeComplete}>
      <div className={styles.recipeCompleteChild} />
      <div className={styles.writeHere}>Write Here</div>
      <div className={styles.addTimer}>
        <div className={styles.addTimerText}>Save This Recipe</div>
      </div>
      <div className={styles.addTimer1} onClick={onAddTimerContainer1Click}>
        <div className={styles.addTimerText1}>Return Home</div>
      </div>
      <div className={styles.image}>
        <div className={styles.imageChild} />
        <img className={styles.navBarMenu} alt="" src="/nav-bar-menu1.svg" />
        <div className={styles.addMedia}>Add Media</div>
      </div>
      <div className={styles.component7}>
        <div className={styles.label}>Rate recipe</div>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/star-61.svg" />
          <img className={styles.frameItem} alt="" src="/star-52.svg" />
          <img className={styles.frameItem} alt="" src="/star-52.svg" />
          <img className={styles.frameChild} alt="" src="/star-8.svg" />
          <img className={styles.frameChild} alt="" src="/star-8.svg" />
        </div>
      </div>
      <div className={styles.stepOverviewSection}>
        <div className={styles.stepOverview}>Recipe Complete!</div>
      </div>
      <div className={styles.stepOverviewSection1}>
        <div className={styles.stepOverview1}>Enjoy your meal</div>
      </div>
      <div className={styles.stepOverviewSection2}>
        <div className={styles.stepOverview2}>Leave a review</div>
      </div>
      <div className={styles.stepOverviewSection3}>
        <div className={styles.stepOverview3}>Upload a photo</div>
      </div>
      <img className={styles.headerIcon} alt="" src="/header.svg" />
    </div>
  );
};

export default RecipeComplete;
