import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipeIngredients3.module.css";

const CreateRecipeIngredients3 = () => {
  const navigate = useNavigate();

  const onTabsContainerClick = useCallback(() => {
    navigate("/create-recipe-ingredients3");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/create-recipe-ingredients4");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.createRecipeIngredients}>
      <div className={styles.createRecipeIngredientsChild} />
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.tabs} onClick={onTabsContainerClick}>
        <div className={styles.label}>Add Step</div>
      </div>
      <div className={styles.step2}>Step 2</div>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <div className={styles.component5}>
        <div className={styles.div}>Onion</div>
        <img
          className={styles.vuesaxlinearstarIcon}
          alt=""
          src="/vuesaxlinearstar1.svg"
        />
        <img className={styles.component5Child} alt="" src="/star-51.svg" />
      </div>
      <div className={styles.ingredients}>Ingredients</div>
      <div className={styles.image}>
        <div className={styles.imageChild} />
        <img className={styles.navBarMenu} alt="" src="/nav-bar-menu.svg" />
        <div className={styles.addMedia}>Add Media</div>
      </div>
      <div className={styles.searchParent} onClick={onGroupContainerClick}>
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <img
            className={styles.vuesaxoutlinesearchNormalIcon}
            alt=""
            src="/vuesaxoutlinesearchnormal5.svg"
          />
          <div className={styles.placeholder}>Search recipe</div>
        </div>
        <div className={styles.editIngredients}>Edit Ingredients</div>
      </div>
      <div className={styles.bg} />
      <div className={styles.description}>Description</div>
      <div className={styles.label1}>Write here</div>
      <div className={styles.approximateTime}>Approximate Time</div>
      <div className={styles.label2}>10 m</div>
      <div className={styles.searchGroup}>
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <img
            className={styles.vuesaxoutlinesearchNormalIcon}
            alt=""
            src="/vuesaxoutlinesearchnormal5.svg"
          />
          <div className={styles.placeholder}>Search recipe</div>
        </div>
        <div className={styles.editIngredients}>Edit Time</div>
      </div>
      <div className={styles.checkBold} />
      <img className={styles.checkBoldIcon} alt="" src="/checkbold.svg" />
      <div className={styles.untimedTask}>Untimed Task</div>
      <div className={styles.timedActiveTaskContainer}>
        <p className={styles.timed}>Timed</p>
        <p className={styles.timed}> Task</p>
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
    </div>
  );
};

export default CreateRecipeIngredients3;
