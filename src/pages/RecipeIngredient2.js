import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeIngredient2.module.css";
import { currentRecipe } from "../Lists";
import { appendSavedRecipes } from "../Lists";
import { groceryList } from "../Lists";



const addToCart = (input) => {
 
  groceryList.push({ text: input.amount +" "+ input.name, clicked: false })
  console.log(input.name);
  
}
const RecipeIngredient2 = () => {
  const navigate = useNavigate();
  const [currentList, setCurrentList] = useState('ingredients');


  const onBookmarkIconClick = useCallback(() => {
    appendSavedRecipes(currentRecipe);
    navigate("/recipe-saved");
  }, [navigate]);

  const onTabsContainer1Click = useCallback(() => {
    setCurrentList('steps');
  }, []);

  const onTabsContainer2Click = useCallback(() => {
    setCurrentList('ingredients');
  }, []);

  const onStartCookingClicked = useCallback(() => {
    navigate("/ingredient-task", { state: { recipe: currentRecipe } });
  }, [navigate, currentRecipe]);

  const onEditButtonClick = useCallback(() => {
    navigate("/create-recipe-ingredients", { state: { recipe: currentRecipe } });
  }, [navigate, currentRecipe]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={styles.recipeingredient}>
      <div className={styles.recipeingredientChild} />
      <div className={styles.card}>
        <img className={styles.imageIcon} alt="" src={currentRecipe.imgPath} />
        <div className={styles.cardChild} />
        <div className={styles.rating}>
          <img className={styles.starIcon} alt="" src="/star.svg" />
          <div className={styles.div}>{currentRecipe.rating}</div>
        </div>
        <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" onClick={onBookmarkIconClick}/>
        <div className={styles.time}>
          <img
            className={styles.vuesaxoutlinetimerIcon}
            alt=""
            src="/vuesaxoutlinetimer1.svg"
          />
          <div className={styles.div}>{currentRecipe.time}</div>
        </div>
      </div>
      <div className={styles.component3}>
        <div 
          className={currentList === 'ingredients' ? `${styles.tabs} ${styles.tabSelected}` : `${styles.tabs} ${styles.tabUnselected}`} 
          onClick={onTabsContainer2Click}
        >
          <div className={styles.label}>Ingredients</div>
        </div>
        <div 
          className={currentList === 'steps' ? `${styles.tabs1} ${styles.tabSelected}` : `${styles.tabs1} ${styles.tabUnselected}`} 
          onClick={onTabsContainer1Click}
        >
          <div className={styles.label}>Recipe Steps</div>
        </div>
      </div>
      <div className={styles.tabs2} onClick={onStartCookingClicked}>
        <div className={styles.label}>Start Interactive Cooking</div>
      </div>
      <div className={styles.frameParent}>
        <div >
          <div className={styles.recipeWrapper}>
            {currentList === 'ingredients' ? (
              <ul className={styles.recipe} >
                {currentRecipe.ingredients.map((item,index) =>(
                  <li id = {index} >
                    <div className={styles.recipe1}>
                      <div className={styles.bg} />
                      <div className={styles.label5}>{item.amount}</div>
                      <div className={styles.tomatos}>{item.name}</div>
                      <img className={styles.imageIcon1} alt="" src="/image7@2x.png" />
                      <img className={styles.imageIcon2} alt="" src="/image41.svg"  onClick={() => addToCart(item)}/>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={styles.recipe} >
                {currentRecipe.steps.map((step,index) =>(
                  <li id = {index} >
                    <div className={styles.recipe1}>
                      <div className={styles.stepName}>{index + 1}: {step.stepName}</div>
                      <div className={styles.bg} >
                        <div className={styles.stepDescription}>{step.stepDescription}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.groupParent}>
        <div className={styles.imageParent}>
          <div className={styles.image} />
          <div className={styles.savedParent}>
            <div className={styles.saved}></div>
            <img
              className={styles.iconnavbookmarkinactive}
              alt=""
              src="/iconnavbookmarkinactive3.svg"
              onClick={onIconNavBookmarkInactiveClick}
            />
          </div>
          <div className={styles.cartParent} onClick={onGroupContainer2Click}>
            <div className={styles.cart}></div>
            <img
              className={styles.iconCartAlt}
              alt=""
              src="/-icon-cart-alt1.svg"
            />
          </div>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-871.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <img className={styles.groupItem} alt="" src="/group-952.svg" />
      </div>
      <div className={styles.foodTitleParent}>
        <div className={styles.foodTitle}>
          {currentRecipe.name}
        </div>
        <button 
          style={{ 
            backgroundColor: 'grey', 
            borderRadius: '10px', 
            float: 'right', 
            border: 'none',
            width: '120px',
            height: '30px',
          }} 
          onClick={onEditButtonClick}
        >
          Edit this recipe
        </button>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.buttonFilterWrapper}>
          <div className={styles.buttonFilterWrapper}>
            <div className={styles.buttonFilterChild} />
            <img
              className={styles.multimediaEqualizer}
              alt=""
              src="/multimedia--equalizer.svg"
            />
          </div>
        </div>
        <div className={styles.header}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft4.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.title}>Ingrident</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredient2;