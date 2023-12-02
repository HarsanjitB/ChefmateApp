import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeProcedure.module.css";

const RecipeProcedure = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onTabsContainerClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onTabsContainer1Click = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recipeprocedure}>
        <div className={styles.recipeprocedureChild} />
        <div className={styles.homeIndicator}>
          <div className={styles.line} />
        </div>
        <div className={styles.card}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.cardChild} />
          <img
            className={styles.playButtonIcon}
            alt=""
            src="/play-button.svg"
          />
          <div className={styles.rating}>
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.div}>4.0</div>
          </div>
          <div className={styles.foodTitle}>
            Spicy chicken burger with French fries
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark1.svg" />
          <div className={styles.time}>
            <img
              className={styles.vuesaxoutlinetimerIcon}
              alt=""
              src="/vuesaxoutlinetimer1.svg"
            />
            <div className={styles.div}>20 min</div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.totalReviews}>(13k Reviews)</div>
          </div>
        </div>
        <div className={styles.time1}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.div}>1 serve</div>
        </div>
        <div className={styles.time2} />
        <div className={styles.steps}>10 Steps</div>
        <div className={styles.creatorsProfile}>
          <div className={styles.creator}>
            <img
              className={styles.unsplashij24uq1smwmIcon}
              alt=""
              src="/unsplashij24uq1smwm@2x.png"
            />
            <div className={styles.info}>
              <div className={styles.location}>
                <div className={styles.label}>Lagos, Nigeria</div>
                <img
                  className={styles.vuesaxboldlocationIcon}
                  alt=""
                  src="/vuesaxboldlocation1.svg"
                />
              </div>
              <div className={styles.label1}>Laura wilson</div>
            </div>
          </div>
          <div className={styles.smallButton}>
            <div className={styles.label2}>Follow</div>
          </div>
        </div>
        <div className={styles.component3}>
          <div className={styles.tabs} onClick={onTabsContainerClick}>
            <div className={styles.label3}>Ingredients</div>
          </div>
          <div className={styles.tabs1} onClick={onTabsContainer1Click}>
            <div className={styles.label3}>Procedure Overview</div>
          </div>
        </div>
        <img className={styles.component4Icon} alt="" src="/component-4.svg" />
        <div className={styles.header} onClick={openActionListContainer}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft1.svg"
          />
          <div className={styles.title}>Ingrident</div>
          <img
            className={styles.vuesaxlinearmoreIcon}
            alt=""
            src="/vuesaxlinearmore1.svg"
          />
        </div>
        <div className={styles.statusBar}>
          <img className={styles.symbolsIcon} alt="" src="/symbols1.svg" />
          <div className={styles.barsstatusTime}>
            <div className={styles.time3}>19:27</div>
          </div>
        </div>
      </div>
      {isActionListContainerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeActionListContainer}
        >
          <ActionListContainer onClose={closeActionListContainer} />
        </PortalPopup>
      )}
    </>
  );
};

export default RecipeProcedure;
