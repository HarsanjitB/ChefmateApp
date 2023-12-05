import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./UntimedTask.module.css";

const UntimedTask = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/passive-timed-task");
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
      <div className={styles.untimedTask}>
        <div className={styles.content}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft5.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.stepNotesSection}>
            <div className={styles.stepNotes}>
              Dont cut your fingers, and dont worry about cutting too finely.
              Just a few thick slices should be good.
            </div>
          </div>
          <img
            className={styles.mediaSectionIcon}
            alt=""
            src="/media-section2@2x.png"
          />
          <div className={styles.ingredientSection}>
            <div className={styles.ingredientSection1}>
              <div className={styles.ingredients}>
                <div className={styles.ingredientsForStep}>
                  <div className={styles.recipe1}>
                    <div className={styles.bg} />
                    <div className={styles.label}>500g</div>
                    <div className={styles.tomatos}>Tomatos</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image20@2x.png"
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
            <div className={styles.stepOverview}>Cut Tomatoes</div>
          </div>
          <div className={styles.header}>
            <img
              className={styles.vuesaxlineararrowLeftIcon1}
              alt=""
              src="/vuesaxlineararrowleft6.svg"
              onClick={onVuesaxlineararrowLeftIcon1Click}
            />
            <img
              className={styles.vuesaxlinearmoreIcon}
              alt=""
              src="/vuesaxlinearmore3.svg"
              onClick={openActionListContainer}
            />
            <div className={styles.stepNumber}>Step n</div>
          </div>
        </div>
        <div className={styles.timers}>
          <div className={styles.timers1}>
            <div className={styles.timerSample}>No Timers Active</div>
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

export default UntimedTask;
