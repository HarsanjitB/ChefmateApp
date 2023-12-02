import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipeIngredients5.module.css";

const CreateRecipeIngredients5 = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onTabsContainerClick = useCallback(() => {
    navigate("/create-recipe-ingredients2");
  }, [navigate]);

  const onTabsContainer2Click = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.createRecipeIngredients}>
        <div className={styles.createRecipeIngredientsChild} />
        <div className={styles.card}>
          <div className={styles.image}>
            <div className={styles.imageChild} />
            <img className={styles.navBarMenu} alt="" src="/nav-bar-menu.svg" />
            <div className={styles.addPicture}>Add Picture</div>
          </div>
          <div className={styles.foodTitle}>Edit Name</div>
          <div className={styles.description}>Description</div>
        </div>
        <div className={styles.component3}>
          <div className={styles.tabs} onClick={onTabsContainerClick}>
            <div className={styles.label}>Ingredients</div>
          </div>
          <div className={styles.tabs1}>
            <div className={styles.label}>Steps</div>
          </div>
        </div>
        <img className={styles.component4Icon} alt="" src="/component-4.svg" />
        <div className={styles.addTags}>Add Tags</div>
        <div className={styles.component5}>
          <div className={styles.div}>Vegetables</div>
          <img
            className={styles.vuesaxlinearstarIcon}
            alt=""
            src="/vuesaxlinearstar1.svg"
          />
          <img className={styles.component5Child} alt="" src="/star-51.svg" />
        </div>
        <div className={styles.component6}>
          <div className={styles.div}>+</div>
          <img
            className={styles.vuesaxlinearstarIcon}
            alt=""
            src="/vuesaxlinearstar1.svg"
          />
          <img className={styles.component5Child} alt="" src="/star-51.svg" />
        </div>
        <div className={styles.createRecipeIngredientsItem} />
        <div className={styles.writeHere}>Write Here</div>
        <div className={styles.tabs2} onClick={onTabsContainer2Click}>
          <div className={styles.label}>Save</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.step1Wrapper}>
            <div className={styles.step1}>
              <div className={styles.bg} />
              <div className={styles.label3}>Heat Food for 10 Minutes</div>
              <div className={styles.step11}>Step 1</div>
              <div className={styles.label4}>10m</div>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-29@2x.png"
              />
              <div className={styles.label5}>Ingredients: Onion, Lettuce</div>
            </div>
          </div>
          <div className={styles.recipe12}>
            <div className={styles.bg1} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.addStep}>Add Step</div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.imageParent}>
            <div className={styles.image1} />
            <div className={styles.savedParent}>
              <div className={styles.saved}>Saved</div>
              <img
                className={styles.iconnavbookmarkinactive}
                alt=""
                src="/iconnavbookmarkinactive2.svg"
                onClick={onIconNavBookmarkInactiveClick}
              />
            </div>
            <div className={styles.cartParent}>
              <div className={styles.cart}>Cart</div>
              <img
                className={styles.iconCartAlt}
                alt=""
                src="/-icon-cart-alt.svg"
              />
            </div>
            <img className={styles.groupChild} alt="" src="/group-87.svg" />
          </div>
          <img className={styles.groupItem} alt="" src="/group-95.svg" />
        </div>
        <div className={styles.header}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft1.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.title}>Ingrident</div>
          <img
            className={styles.vuesaxlinearmoreIcon}
            alt=""
            src="/vuesaxlinearmore1.svg"
            onClick={openActionListContainer}
          />
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

export default CreateRecipeIngredients5;
