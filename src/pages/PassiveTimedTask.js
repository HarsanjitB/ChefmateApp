import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PassiveTimedTask.module.css";

const PassiveTimedTask = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/active-timed-task");
  }, [navigate]);

  const onVuesaxlineararrowLeftIcon1Click = useCallback(() => {
    navigate("/untimed-task");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.passiveTimedTask}>
        <div className={styles.smallButton}>
          <div className={styles.label}>Start Timer [10m]</div>
        </div>
        <div className={styles.content}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft2.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.stepNotesSection}>
            <div className={styles.stepNotes}>
              Make sure to add some salt to raise the temperature of the boiling
              water. You can also put a lid on the pot to speed up the proccess.
            </div>
          </div>
          <img
            className={styles.mediaSectionIcon}
            alt=""
            src="/media-section1@2x.png"
          />
          <div className={styles.ingredientSection}>
            <div className={styles.ingredientSection1}>
              <div className={styles.ingredients}>
                <div className={styles.ingredientsForStep}>
                  <div className={styles.recipe1}>
                    <div className={styles.bg} />
                    <div className={styles.quantity}>1 L</div>
                    <div className={styles.name}>Water</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image18@2x.png"
                    />
                  </div>
                  <div className={styles.recipe1}>
                    <div className={styles.bg} />
                    <div className={styles.quantity}>1 tsp</div>
                    <div className={styles.name}>Salt</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image19@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.neededForThisContainer}>
              <p className={styles.neededForThis}>Needed for this step:</p>
            </div>
          </div>
          <div className={styles.stepOverviewSection}>
            <div className={styles.stepOverview}>(Time: ~10 minutes)</div>
            <div className={styles.stepOverview1}>Boil Water</div>
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
                src="/mask-group3@2x.png"
              />
              <div className={styles.timeRemaining}>7m</div>
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

export default PassiveTimedTask;
