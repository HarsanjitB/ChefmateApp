import { useState, useCallback } from "react";
import ActiveTimedTaskGreyedOut from "../components/ActiveTimedTaskGreyedOut";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ActiveTimedTask.module.css";

const ActiveTimedTask = () => {
  const [isActiveTimedTaskGreyedOutOpen, setActiveTimedTaskGreyedOutOpen] =
    useState(false);
  const navigate = useNavigate();

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/recipe-complete");
  }, [navigate]);

  const onVuesaxlineararrowLeftIcon1Click = useCallback(() => {
    navigate("/passive-timed-task");
  }, [navigate]);

  const openActiveTimedTaskGreyedOut = useCallback(() => {
    setActiveTimedTaskGreyedOutOpen(true);
  }, []);

  const closeActiveTimedTaskGreyedOut = useCallback(() => {
    setActiveTimedTaskGreyedOutOpen(false);
  }, []);

  const onTimersContainer1Click = useCallback(() => {
    navigate("/active-timed-task-greyed-out");
  }, [navigate]);

  return (
    <>
      <div className={styles.activeTimedTask}>
        <div className={styles.smallButton}>
          <div className={styles.label}>Start Timer [2m]</div>
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
                  <div className={styles.recipe2}>
                    <div className={styles.bg} />
                    <div className={styles.quantity}>As Needed</div>
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
              <p className={styles.neededForThis}>Needed for this step:</p>
            </div>
          </div>
          <div className={styles.stepOverviewSection}>
            <div className={styles.stepOverview}>(Time: ~10 minutes)</div>
            <div className={styles.stepOverview1}>Cook Pancake Batter</div>
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
              onClick={openActiveTimedTaskGreyedOut}
            />
            <div className={styles.stepNumber}>Step n</div>
          </div>
        </div>
        <div className={styles.timers} onClick={onTimersContainer1Click}>
          <div className={styles.timers1}>
            <div className={styles.noTimerSample}>No Timers Active</div>
            <div className={styles.timer}>
              <div className={styles.bg1} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group1@2x.png"
              />
              <div className={styles.timeRemaining}>30s</div>
              <div className={styles.timerName}>Pancake</div>
            </div>
            <div className={styles.timer1}>
              <div className={styles.bg1} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group2@2x.png"
              />
              <div className={styles.timeRemaining}>60s</div>
              <div className={styles.timerName}>Pancake</div>
            </div>
            <div className={styles.timer2}>
              <div className={styles.bg1} />
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
      {isActiveTimedTaskGreyedOutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeActiveTimedTaskGreyedOut}
        >
          <ActiveTimedTaskGreyedOut onClose={closeActiveTimedTaskGreyedOut} />
        </PortalPopup>
      )}
    </>
  );
};

export default ActiveTimedTask;
