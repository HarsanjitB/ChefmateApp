import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onMediumButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onMediumButtonContainer1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.mainHomepageWrapper}>
        <div className={styles.mainHomepage}>
          <img
            className={styles.mainHomepageChild}
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div className={styles.text}>
            <div className={styles.headerTitle}>
              <p className={styles.cookWith}>{`Cook with `}</p>
              <p className={styles.cookWith}>Confidence</p>
            </div>
            <div className={styles.caption}>
              Let us guide you through each step of your cooking journey
            </div>
          </div>
          <div className={styles.text1}>
            <div className={styles.headerTitle}>
              <p className={styles.cookWith}>{`Cook with `}</p>
              <p className={styles.cookWith}>Confidence</p>
            </div>
            <div className={styles.caption1}>
              Let us guide you through each step of your cooking journey
            </div>
          </div>
          <div
            className={styles.mediumButtonWrapper}
            onClick={onFrameContainerClick}
          >
            <div
              className={styles.mediumButton}
              onClick={onMediumButtonContainerClick}
            >
              <div className={styles.label}>Explore Recipes</div>
              <img
                className={styles.icongeneralarrowRight}
                alt=""
                src="/icongeneralarrowright.svg"
              />
            </div>
          </div>
          <div className={styles.mainHomepageItem} />
          <div
            className={styles.mediumButton1}
            onClick={onMediumButtonContainer1Click}
          >
            <div className={styles.label}>Explore Recipes</div>
            <img
              className={styles.icongeneralarrowRight}
              alt=""
              src="/icongeneralarrowright.svg"
            />
          </div>
          <img
            className={styles.mainHomepageInner}
            alt=""
            src="/group-125.svg"
          />
          <img className={styles.frameIcon} alt="" src="/group-1251.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
