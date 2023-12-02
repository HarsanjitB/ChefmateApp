import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onCardsContainerClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.group107ContainerWrapper}>
        <div className={styles.group107Container}>
          <div className={styles.resultsFromSearch}>
            <div className={styles.resultsFromSearchChild} />
            <div className={styles.cards} onClick={onCardsContainerClick}>
              <div className={styles.card}>
                <img
                  className={styles.cardChild}
                  alt=""
                  src="/rectangle-646@2x.png"
                />
                <div className={styles.cardItem} />
                <div className={styles.rating}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.div}>4.0</div>
                </div>
                <div className={styles.foodTitle}>
                  Traditional spare ribs baked
                </div>
                <div className={styles.creator}>By Chef John</div>
              </div>
              <div className={styles.card1}>
                <img
                  className={styles.cardChild}
                  alt=""
                  src="/rectangle-6461@2x.png"
                />
                <div className={styles.cardItem} />
                <div className={styles.rating}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.div}>4.0</div>
                </div>
                <div className={styles.foodTitle1}>
                  spice roasted chicken with flavored rice
                </div>
                <div className={styles.creator}>By Mark Kelvin</div>
              </div>
              <div className={styles.card2}>
                <img
                  className={styles.cardChild}
                  alt=""
                  src="/rectangle-6462@2x.png"
                />
                <div className={styles.cardItem} />
                <div className={styles.rating}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.div}>4.0</div>
                </div>
                <div className={styles.foodTitle1}>
                  Chinese style Egg fried rice with sliced pork fillet
                </div>
                <div className={styles.creator}>By laura wilson</div>
              </div>
              <div className={styles.card3}>
                <img
                  className={styles.cardChild}
                  alt=""
                  src="/rectangle-6463@2x.png"
                />
                <div className={styles.cardItem} />
                <div className={styles.rating}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.div}>4.0</div>
                </div>
                <div className={styles.foodTitle1}>
                  Chinese style Egg fried rice with sliced pork fillet
                </div>
                <div className={styles.creator}>By laura wilson</div>
              </div>
            </div>
            <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
            <div className={styles.homeIndicator}>
              <div className={styles.line} />
            </div>
            <div className={styles.recipesParent}>
              <div className={styles.recipes}>Recipes</div>
              <div className={styles.results}>8 results</div>
              <div className={styles.search}>
                <div className={styles.searchChild} />
                <img
                  className={styles.vuesaxoutlinesearchNormalIcon}
                  alt=""
                  src="/vuesaxoutlinesearchnormal1.svg"
                />
                <div className={styles.placeholder}>Pasta</div>
                <div className={styles.searchItem} />
              </div>
              <div className={styles.homeIndicator1}>
                <div className={styles.line} />
              </div>
              <div className={styles.image28Parent}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
                <img
                  className={styles.image30Icon}
                  alt=""
                  src="/image-30@2x.png"
                />
                <img
                  className={styles.image20Icon}
                  alt=""
                  src="/image-20@2x.png"
                />
                <div className={styles.rating4}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <div className={styles.foodTitle4}>Tuscan Spaghetti</div>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group4@2x.png"
                />
                <b className={styles.foodTitle5}>
                  <p className={styles.lemonRavioli}>Lemon Ravioli</p>
                  <p className={styles.lemonRavioli}>&nbsp;</p>
                </b>
                <div className={styles.rating5}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <img
                  className={styles.image22Icon}
                  alt=""
                  src="/image-22@2x.png"
                />
                <div className={styles.rating6}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <div className={styles.foodTitle6}>Lasagna With Meat Sauce</div>
                <img
                  className={styles.image25Icon}
                  alt=""
                  src="/image-25@2x.png"
                />
                <div className={styles.rating7}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <div className={styles.foodTitle7}>Cheeseburger Pasta</div>
                <img
                  className={styles.image26Icon}
                  alt=""
                  src="/image-26@2x.png"
                />
                <div className={styles.foodTitle8}>Basil Pesto Pasta</div>
                <div className={styles.rating8}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <img
                  className={styles.image27Icon}
                  alt=""
                  src="/image-27@2x.png"
                />
                <div className={styles.rating9}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <div className={styles.foodTitle9}>Seafood Pasta</div>
                <div className={styles.foodTitle10}>Meatball Pasta</div>
                <div className={styles.foodTitle11}>Chicken Pasta</div>
                <div className={styles.rating10}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
                <div className={styles.rating11}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.div}>5.0</div>
                </div>
              </div>
              <img className={styles.groupChild} alt="" src="/group-91.svg" />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.header}>
                <img
                  className={styles.vuesaxlineararrowLeftIcon}
                  alt=""
                  src="/vuesaxlineararrowleft.svg"
                />
                <div className={styles.title}>Results</div>
              </div>
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
                    className={styles.groupItem}
                    alt=""
                    src="/group-87.svg"
                  />
                </div>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-951.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
