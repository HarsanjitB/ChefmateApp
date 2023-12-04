import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedRecipe.module.css";
import { savedRecipesList } from "../Lists";
const SavedRecipe = () => {
  const navigate = useNavigate();

  const onCardsContainerClick = useCallback((id) => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.savedRecipe}>
      <div className={styles.savedRecipeChild} />
      <div className={styles.cards}>
        {/* <div className={styles.cards1} onClick={onCardsContainerClick}> */}
          <ul className={styles.cards1} >
            {savedRecipesList.map((item,index) =>(
              <li id = {index} onClick={() => onCardsContainerClick(index)}>
                <div >
                <div className={styles.card}>
                  <img className={styles.cardChild} alt="" src={item.imgPath} />
                  <div className={styles.cardItem} />
                  <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
                  <div className={styles.rating}>
                    <img className={styles.starIcon} alt="" src="/star.svg" />
                    <div className={styles.div}>4.0</div>
                  </div>
                  <div className={styles.foodTitle}>
                    {item.name}
                  </div>
                  <div className={styles.time}>
                    <img
                      className={styles.vuesaxoutlinetimerIcon}
                      alt=""
                      src="/vuesaxoutlinetimer1.svg"
                    />
                    <div className={styles.div}>{item.time}</div>
                  </div>
                </div>
                </div>
                
              </li>
            ))}
          </ul>
          {/* <div className={styles.card}>
            <img className={styles.cardChild} alt="" src="/image40@2x.png" />
            <div className={styles.cardItem} />
            <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle}>
              Chicken Pasta with Tomato and Spinach
            </div>
            <div className={styles.creator}>By BadKarma23</div>
            <div className={styles.time}>
              <img
                className={styles.vuesaxoutlinetimerIcon}
                alt=""
                src="/vuesaxoutlinetimer1.svg"
              />
              <div className={styles.div}>20 min</div>
            </div>
          </div>
          <div className={styles.card1}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6468@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.time1}>
              <img
                className={styles.vuesaxoutlinetimerIcon}
                alt=""
                src="/vuesaxoutlinetimer1.svg"
              />
              <div className={styles.div}>20 min</div>
            </div>
            <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
            <div className={styles.rating1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle1}>
              spice roasted chicken with flavored rice
            </div>
            <div className={styles.creator1}>By CookEasy</div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6469@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle2}>
              Spicy fried rice mix chicken bali
            </div>
            <div className={styles.creator}>By inJailoutSoon</div>
            <img className={styles.bookmarkIcon2} alt="" src="/bookmark2.svg" />
            <div className={styles.time2}>
              <img
                className={styles.vuesaxoutlinetimerIcon}
                alt=""
                src="/vuesaxoutlinetimer1.svg"
              />
              <div className={styles.div}>20 min</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-64610@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.time2}>
              <img
                className={styles.vuesaxoutlinetimerIcon}
                alt=""
                src="/vuesaxoutlinetimer1.svg"
              />
              <div className={styles.div}>20 min</div>
            </div>
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>3.0</div>
            </div>
            <div className={styles.foodTitle2}>
              Lamb chops with fruity couscous and mint
            </div>
            <div className={styles.creator}>By Spicy Nelly</div>
            <img className={styles.bookmarkIcon2} alt="" src="/bookmark2.svg" />
          </div> */}
        {/* </div> */}
      </div>
      <div className={styles.component3}>
        <div className={styles.tabs}>
          <div className={styles.label}>Recipe</div>
        </div>
        <div className={styles.tabs1}>
          <div className={styles.label}>dfd</div>
        </div>
      </div>
      <div className={styles.tabs2} />
      <div className={styles.tabs3} />
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <div className={styles.groupParent}>
        <div className={styles.imageParent}>
          <div className={styles.image} />
          <div className={styles.savedParent}>
            <div className={styles.saved}>Saved</div>
            <img
              className={styles.iconnavbookmarkinactive}
              alt=""
              src="/iconnavbookmarkinactive4.svg"
              onClick={onIconNavBookmarkInactiveClick}
            />
          </div>
          <div className={styles.cartParent} onClick={onGroupContainer1Click}>
            <div className={styles.cart}>Cart</div>
            <img
              className={styles.iconCartAlt}
              alt=""
              src="/-icon-cart-alt.svg"
            />
          </div>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-87.svg"
            onClick={onGroupIcon1Click}
          />
        </div>
        <img className={styles.groupItem} alt="" src="/group-951.svg" />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>Saved recipes</div>
      </div>
    </div>
  );
};

export default SavedRecipe;
