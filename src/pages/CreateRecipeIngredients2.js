import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipeIngredients2.module.css";

const CreateRecipeIngredients2 = () => {
  const navigate = useNavigate();

  const onTabsContainerClick = useCallback(() => {
    navigate("/create-recipe-ingredients1");
  }, [navigate]);

  return (
    <div className={styles.createRecipeIngredients}>
      <div className={styles.createRecipeIngredientsChild} />
      <div className={styles.homeIndicator}>
        <div className={styles.line} />
      </div>
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.tabs} onClick={onTabsContainerClick}>
        <div className={styles.label}>Save</div>
      </div>
      <div className={styles.ingredients}>Ingredients</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.recipe10}>
        <div className={styles.bg} />
        <div className={styles.onion}>Onion</div>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
        <div className={styles.searchWrapper}>
          <div className={styles.search}>
            <div className={styles.searchChild} />
            <img
              className={styles.vuesaxoutlinesearchNormalIcon}
              alt=""
              src="/vuesaxoutlinesearchnormal4.svg"
            />
            <div className={styles.placeholder}>Search recipe</div>
          </div>
        </div>
      </div>
      <div className={styles.checkBold} />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
    </div>
  );
};

export default CreateRecipeIngredients2;
