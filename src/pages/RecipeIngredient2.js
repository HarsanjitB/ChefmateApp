import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeIngredient2.module.css";

const RecipeIngredient2 = () => {
  const navigate = useNavigate();

  const onTabsContainer1Click = useCallback(() => {
    navigate("/recipeingredient2");
  }, [navigate]);

  const onTabsContainer2Click = useCallback(() => {
    navigate("/ingredient-task");
  }, [navigate]);

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
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.recipeingredient}>
      <div className={styles.recipeingredientChild} />
      <div className={styles.card}>
        <img className={styles.imageIcon} alt="" src="/image40@2x.png" />
        <div className={styles.cardChild} />
        <div className={styles.rating}>
          <img className={styles.starIcon} alt="" src="/star.svg" />
          <div className={styles.div}>5.0</div>
        </div>
        <img className={styles.bookmarkIcon} alt="" src="/bookmark3.svg" />
        <div className={styles.time}>
          <img
            className={styles.vuesaxoutlinetimerIcon}
            alt=""
            src="/vuesaxoutlinetimer1.svg"
          />
          <div className={styles.div}>20 min</div>
        </div>
      </div>
      <div className={styles.time1}>
        <div className={styles.items}>0 Items</div>
      </div>
      <div className={styles.component3}>
        <div className={styles.tabs}>
          <div className={styles.label}>Ingredients</div>
        </div>
        <div className={styles.tabs1} onClick={onTabsContainer1Click}>
          <div className={styles.label}>Recipe Steps</div>
        </div>
      </div>
      <div className={styles.tabs2} onClick={onTabsContainer2Click}>
        <div className={styles.label}>Start Interactive Cooking</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.recipeWrapper}>
          <div className={styles.recipe}>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label3}>2</div>
              <div className={styles.tomatos}>Tomatos</div>
              <img className={styles.imageIcon1} alt="" src="/image5@2x.png" />
              <img className={styles.imageIcon2} alt="" src="/image41.svg" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label4}>1/2</div>
              <div className={styles.cabbage}>Cabbage</div>
              <img className={styles.imageIcon3} alt="" src="/image6@2x.png" />
              <img className={styles.imageIcon4} alt="" src="/image42.svg" />
            </div>
            <div className={styles.recipe1}>
              <img className={styles.bgIcon} alt="" src="/bg.svg" />
              <div className={styles.label5}>2 Slices</div>
              <div className={styles.cheese}>Cheese</div>
              <img className={styles.imageIcon3} alt="" src="/image7@2x.png" />
              <img className={styles.imageIcon6} alt="" src="/image43.svg" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label6}>1 Small</div>
              <div className={styles.label6}>1 Small</div>
              <div className={styles.onions}>Onions</div>
              <img className={styles.imageIcon3} alt="" src="/image7@2x.png" />
              <img className={styles.imageIcon4} alt="" src="/image44.svg" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label8}>100 g</div>
              <div className={styles.groundBeef}>Ground Beef</div>
              <img className={styles.imageIcon3} alt="" src="/image8@2x.png" />
              <img className={styles.imageIcon4} alt="" src="/image45.svg" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Green onion</div>
              <img className={styles.imageIcon1} alt="" src="/image9@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Omelette</div>
              <img className={styles.imageIcon1} alt="" src="/image10@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Hot Dog</div>
              <img className={styles.imageIcon1} alt="" src="/image11@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Oninon</div>
              <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Lettuce</div>
              <img className={styles.imageIcon1} alt="" src="/image12@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Spinach</div>
              <img className={styles.imageIcon1} alt="" src="/image13@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>{`Red & Green Chilli`}</div>
              <img className={styles.imageIcon1} alt="" src="/image14@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Fries</div>
              <img className={styles.imageIcon1} alt="" src="/image15@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Chicken</div>
              <img className={styles.imageIcon1} alt="" src="/image16@2x.png" />
            </div>
            <div className={styles.recipe9}>
              <div className={styles.bg4} />
              <div className={styles.label9}>300g</div>
              <div className={styles.greenOnion}>Burger</div>
              <img className={styles.imageIcon1} alt="" src="/image17@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.recipe16}>
          <div className={styles.bg14} />
        </div>
        <div className={styles.recipe17}>
          <div className={styles.bg15} />
        </div>
      </div>
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.groupParent}>
        <div className={styles.imageParent}>
          <div className={styles.image} />
          <div className={styles.savedParent}>
            <div className={styles.saved}>Saved</div>
            <img
              className={styles.iconnavbookmarkinactive}
              alt=""
              src="/iconnavbookmarkinactive3.svg"
              onClick={onIconNavBookmarkInactiveClick}
            />
          </div>
          <div className={styles.cartParent} onClick={onGroupContainer2Click}>
            <div className={styles.cart}>Cart</div>
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
          Chicken Pasta with Tomato and Spinach
        </div>
        <div className={styles.creatorsProfile} />
        <div className={styles.label19}>Posted By</div>
        <div className={styles.rating1}>
          <div className={styles.div}>Featured</div>
        </div>
        <div className={styles.creatorParent}>
          <div className={styles.creator}>
            <div className={styles.info}>
              <div className={styles.label20}>BadKarma23</div>
            </div>
          </div>
          <img className={styles.starIcon1} alt="" src="/star.svg" />
          <img className={styles.starIcon2} alt="" src="/star.svg" />
          <img className={styles.starIcon3} alt="" src="/star.svg" />
        </div>
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
