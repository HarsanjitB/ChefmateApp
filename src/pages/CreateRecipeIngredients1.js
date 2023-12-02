import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipeIngredients1.module.css";

const CreateRecipeIngredients1 = () => {
  const navigate = useNavigate();

  const onTabsContainerClick = useCallback(() => {
    navigate("/create-recipe-ingredients2");
  }, [navigate]);

  return (
    <div className={styles.createRecipeIngredients}>
      <div className={styles.createRecipeIngredientsChild} />
      <div className={styles.homeIndicator}>
        <div className={styles.line} />
      </div>
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.tabs} onClick={onTabsContainerClick}>
        <div className={styles.label}>
          <p className={styles.add}>Add</p>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <img
            className={styles.vuesaxoutlinesearchNormalIcon}
            alt=""
            src="/vuesaxoutlinesearchnormal1.svg"
          />
          <div className={styles.placeholder}>Search recipe</div>
        </div>
      </div>
      <div className={styles.searchIngredient}>Search Ingredient</div>
      <div className={styles.recipe10}>
        <div className={styles.bg} />
        <div className={styles.onion}>Onion</div>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      </div>
      <div className={styles.amount}>Amount</div>
      <div className={styles.searchContainer}>
        <div className={styles.search1}>
          <div className={styles.searchChild} />
          <img
            className={styles.vuesaxoutlinesearchNormalIcon1}
            alt=""
            src="/vuesaxoutlinesearchnormal2.svg"
          />
          <div className={styles.placeholder1}>Search recipe</div>
        </div>
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search2}>
          <div className={styles.searchInner} />
          <img
            className={styles.vuesaxoutlinesearchNormalIcon2}
            alt=""
            src="/vuesaxoutlinesearchnormal3.svg"
          />
          <div className={styles.placeholder2}>Search recipe</div>
        </div>
        <div className={styles.g}>g</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default CreateRecipeIngredients1;
