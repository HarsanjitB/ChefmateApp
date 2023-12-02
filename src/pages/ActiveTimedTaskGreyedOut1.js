import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ActiveTimedTaskGreyedOut1.module.css";

const ActiveTimedTaskGreyedOut1 = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/active-timed-task");
  }, [navigate]);

  const onVuesaxlineararrowLeftIcon1Click = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.activeTimedTaskGreyedOut}>
        <div className={styles.content}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft2.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.stepNotesSection}>
            <div className={styles.stepNotes}>
              Make sure to use lots of oil for a nice brown, and make sure the
              pan is nice and hot before you cook!
            </div>
          </div>
          <img
            className={styles.mediaSectionIcon}
            alt=""
            src="/media-section@2x.png"
          />
          <div className={styles.ingredientSection}>
            <div className={styles.ingredientSection1}>
              <div className={styles.ingredients}>
                <div className={styles.ingredientsForStep}>
                  <div className={styles.recipe1}>
                    <div className={styles.bg} />
                    <div className={styles.quantity}>1 Bowl</div>
                    <div className={styles.name}>Batter</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image2@2x.png"
                    />
                  </div>
                  <div className={styles.recipe1}>
                    <div className={styles.bg} />
                    <div className={styles.quantity1}>As Needed</div>
                    <div className={styles.name}>Oil</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image3@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.neededForThisContainer}>
              <p className={styles.neededForThis}>Needed for this step: </p>
            </div>
          </div>
          <div className={styles.stepOverviewSection}>
            <div className={styles.stepOverview}>(Time: ~10 minutes)</div>
            <div className={styles.stepOverview1}>Cook Pancakes</div>
          </div>
          <div className={styles.header}>
            <img
              className={styles.vuesaxlineararrowLeftIcon1}
              alt=""
              src="/vuesaxlineararrowleft3.svg"
              onClick={onVuesaxlineararrowLeftIcon1Click}
            />
            <img
              className={styles.vuesaxlinearmoreIcon}
              alt=""
              src="/vuesaxlinearmore2.svg"
              onClick={openActionListContainer}
            />
            <div className={styles.stepNumber}>Step n</div>
          </div>
        </div>
        <div className={styles.timers}>
          <div className={styles.timers1}>
            <div className={styles.noTimerSample}>No Timers Active</div>
            <div className={styles.timer}>
              <div className={styles.bg2} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group1@2x.png"
              />
              <div className={styles.timeRemaining}>3m</div>
              <div className={styles.timerName}>Boil Water</div>
            </div>
          </div>
          <div className={styles.addTimer}>
            <div className={styles.addTimerText}>+</div>
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

export default ActiveTimedTaskGreyedOut1;
