import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeSaved.module.css";

const RecipeSaved = () => {
  const navigate = useNavigate();

  const onTabsContainer2Click = useCallback(() => {
    navigate("/ingredient-task");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSmallButtonContainerClick = useCallback(() => {
    navigate("/results-from-search");
  }, [navigate]);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.recipeSaved}>
      <div className={styles.recipeSavedChild} />
      <div className={styles.card}>
        <img className={styles.imageIcon} alt="" src="/image40@2x.png" />
        <div className={styles.cardChild} />
        <div className={styles.rating}>
          <img className={styles.starIcon} alt="" src="/star.svg" />
          <div className={styles.div}>4.0</div>
        </div>
        <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
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
        <div className={styles.tabs1}>
          <div className={styles.label}>Recipe Steps</div>
        </div>
      </div>
      <div className={styles.tabs2} onClick={onTabsContainer2Click}>
        <div className={styles.label}>Start Interactive Cooking</div>
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
          <img
            className={styles.groupChild}
            alt=""
            src="/group-87.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <img className={styles.groupItem} alt="" src="/group-951.svg" />
      </div>
      <div className={styles.foodTitleParent}>
        <div className={styles.foodTitle}>
          Chicken Pasta with Tomato and Spinach
        </div>
        <div className={styles.creatorsProfile} />
        <div className={styles.label3}>Posted By</div>
        <div className={styles.rating1}>
          <div className={styles.div}>Featured</div>
        </div>
        <div className={styles.creatorParent}>
          <div className={styles.creator}>
            <div className={styles.info}>
              <div className={styles.label4}>BadKarma23</div>
            </div>
          </div>
          <img className={styles.starIcon1} alt="" src="/star.svg" />
          <img className={styles.starIcon2} alt="" src="/star.svg" />
          <img className={styles.starIcon3} alt="" src="/star.svg" />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.step1Parent}>
          <div className={styles.step1}>
            <div className={styles.bg} />
          </div>
          <div className={styles.step2}>
            <div className={styles.bg1} />
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 5</div>
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 6</div>
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 7</div>
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 8</div>
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 9</div>
          </div>
          <div className={styles.step1}>
            <div className={styles.bg} />
            <div className={styles.label5}>
              Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div className={styles.step51}>Step 10</div>
          </div>
        </div>
        <div className={styles.step11}>
          <div className={styles.label11}>
            <p className={styles.thisIsWhat}>
              This is what you first need to make this food.
            </p>
            <p
              className={styles.thisIsWhat}
            >{`Whatever you do, make sure this is first. `}</p>
            <p className={styles.thisIsWhat}>
              If you don’t do this, it won’t be good.
            </p>
          </div>
          <div className={styles.step12}>Step 1</div>
          <div className={styles.label12}>10m</div>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        </div>
        <div className={styles.step21}>
          <div className={styles.label11}>
            <p className={styles.thisIsWhat}>
              Good, you did the first thing. Now you must
            </p>
            <p className={styles.thisIsWhat}>
              do this thing. It is crucial because if you don’t
            </p>
            <p className={styles.thisIsWhat}>
              do it, the next thing won’t make sense. So
            </p>
            <p className={styles.thisIsWhat}>please, make sure you do it.</p>
            <p className={styles.thisIsWhat}>&nbsp;</p>
          </div>
          <div className={styles.step12}>Step 2</div>
          <div className={styles.label14}>10m</div>
          <img className={styles.image29Icon1} alt="" src="/image-29@2x.png" />
        </div>
        <div className={styles.step41}>
          <div className={styles.label11}>
            <p className={styles.thisIsWhat}>
              I am glad you did everything else. It is wise
            </p>
            <p className={styles.thisIsWhat}>
              that you also do this. Don’t make the same
            </p>
          </div>
          <div className={styles.step12}>Step 4</div>
          <div className={styles.label12}>10m</div>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          <div className={styles.label17}>Ingredients: Onion, Lettuce</div>
        </div>
        <div className={styles.step31}>
          <div className={styles.label11}>
            <p className={styles.thisIsWhat}>
              I know what the other steps said but this is
            </p>
            <p className={styles.thisIsWhat}>
              the most important step. You cannot do
            </p>
            <p className={styles.thisIsWhat}>anything if you don’t do this.</p>
          </div>
          <div className={styles.step12}>Step 3</div>
          <div className={styles.label12}>10m</div>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        </div>
      </div>
      <div className={styles.recipe18}>
        <div className={styles.bg10} />
      </div>
      <div className={styles.bg11} />
      <div className={styles.homeIndicatorParent}>
        <div className={styles.homeIndicator}>
          <div className={styles.line} />
        </div>
        <div className={styles.groupInner} />
        <div className={styles.recipeAddedTo}>
          Recipe added to Saved Recipes
        </div>
        <div
          className={styles.smallButton}
          onClick={onSmallButtonContainerClick}
        >
          <div className={styles.label20}>View Saved Recipes</div>
        </div>
        <div className={styles.youAreOn}>
          You are on your way to cooking something amazing!
        </div>
        <img className={styles.groupIcon} alt="" src="/group-116.svg" />
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

export default RecipeSaved;
