import { useState, useCallback } from "react";
import Component5Container from "./Component5Container";
import PortalPopup from "./PortalPopup";
import styles from "./ActionListContainer.module.css";

const ActionListContainer = () => {
  const [isComponent5ContainerOpen, setComponent5ContainerOpen] =
    useState(false);

  const openComponent5Container = useCallback(() => {
    setComponent5ContainerOpen(true);
  }, []);

  const closeComponent5Container = useCallback(() => {
    setComponent5ContainerOpen(false);
  }, []);

  const onAssetsActionItemContainer2Click = useCallback(() => {
    // Please sync "Reviews on Recipe" to the project
  }, []);

  return (
    <>
      <div className={styles.actionListContainer}>
        <div className={styles.assetsactionItem}>
          <div className={styles.label}>share</div>
          <img className={styles.icon} alt="" src="/20140637941540882615.svg" />
        </div>
        <div
          className={styles.assetsactionItem1}
          onClick={openComponent5Container}
        >
          <div className={styles.label1}>{`Rate Recipe `}</div>
          <img
            className={styles.assetsactionItemChild}
            alt=""
            src="/star-5.svg"
          />
        </div>
        <div
          className={styles.assetsactionItem1}
          onClick={onAssetsActionItemContainer2Click}
        >
          <div className={styles.label1}>Review</div>
          <img
            className={styles.inputFieldvuesaxboldmessagIcon}
            alt=""
            src="/input-fieldvuesaxboldmessage.svg"
          />
        </div>
        <div className={styles.assetsactionItem}>
          <div className={styles.label}>Unsave</div>
          <img
            className={styles.iconnavbookmarkactive}
            alt=""
            src="/iconnavbookmarkactive.svg"
          />
        </div>
      </div>
      {isComponent5ContainerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComponent5Container}
        >
          <Component5Container onClose={closeComponent5Container} />
        </PortalPopup>
      )}
    </>
  );
};

export default ActionListContainer;
