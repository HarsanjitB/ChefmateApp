import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./IngredientTask.module.css";

const IngredientTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = location.state.recipe;
  const placeholderImgSrc = "/image21@2x.png";
  const ingredients = recipe.ingredients;

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/active-timed-task", { state: { recipe } });
  }, [navigate, recipe]);

  const onHeaderClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  return (
    <div className={styles.ingredientTask}>
      <img
        className={styles.vuesaxlineararrowLeftIcon}
        alt=""
        src="/vuesaxlineararrowleft7.svg"
        onClick={onVuesaxlineararrowLeftIconClick}
      />
      <div className={styles.stepNotesSection}>
        <div className={styles.stepNotes}>
          <ul className={styles.gatherAllNeededIngredients}>
            <li className={styles.gatherAllNeeded}>
                - This textbox contains notes from the recipe creator.
                <br></br>
                - Feel free to add your own notes to each recipe step for the next time you cook this dish!
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.recipeWrapper}>
          <div className={styles.recipe}>
            {ingredients.map((ingredient, index) => (
              <div className={styles.recipe1} key={index}>
                <div className={styles.bg} />
                <div className={styles.label}>{ingredient.amount}</div>
                <div className={styles.tomatos}>{ingredient.name}</div>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src={placeholderImgSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.stepOverviewSection}>
        <div className={styles.stepOverview}>Prepare Ingredients</div>
      </div>
      <img
        className={styles.headerIcon}
        alt=""
        src="/header.svg"
        onClick={onHeaderClick}
      />
    </div>
  );
};

export default IngredientTask;
