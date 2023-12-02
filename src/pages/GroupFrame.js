import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupFrame.module.css";

const GroupFrame = () => {
  const navigate = useNavigate();

  const onCardsContainerClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onSmallButtonContainerClick = useCallback(() => {
    navigate("/results-from-search");
  }, [navigate]);

  return (
    <div className={styles.group105ContainerParent}>
      <div className={styles.group105Container}>
        <div className={styles.adjustSearchWithFilter}>
          <div className={styles.adjustSearchWithFilterChild} />
          <div className={styles.recipes}>Recipes</div>
          <div className={styles.results}>8 results</div>
          <div className={styles.cards} onClick={onCardsContainerClick}>
            <div className={styles.card}>
              <img
                className={styles.cardChild}
                alt=""
                src="/rectangle-6464@2x.png"
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
                src="/rectangle-6465@2x.png"
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
                src="/rectangle-6466@2x.png"
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
                src="/rectangle-6466@2x.png"
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
          <div className={styles.homeIndicator}>
            <div className={styles.line} />
          </div>
          <img className={styles.image24Icon} alt="" src="/image-241@2x.png" />
          <div className={styles.homeIndicator1}>
            <div className={styles.line} />
          </div>
          <div className={styles.image20Parent}>
            <img
              className={styles.image20Icon}
              alt=""
              src="/image-201@2x.png"
            />
            <div className={styles.rating4}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <div className={styles.foodTitle4}>Tuscan Spaghetti</div>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group5@2x.png"
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
              src="/image-221@2x.png"
            />
            <div className={styles.rating6}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <div className={styles.foodTitle6}>Lasagna With Meat Sauce</div>
            <img
              className={styles.image25Icon}
              alt=""
              src="/image-251@2x.png"
            />
            <div className={styles.rating7}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <div className={styles.foodTitle7}>Cheeseburger Pasta</div>
            <img
              className={styles.image26Icon}
              alt=""
              src="/image-261@2x.png"
            />
            <div className={styles.foodTitle8}>Basil Pesto Pasta</div>
            <div className={styles.rating8}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <img
              className={styles.image27Icon}
              alt=""
              src="/image-271@2x.png"
            />
            <div className={styles.rating9}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <div className={styles.foodTitle9}>Seafood Pasta</div>
            <img
              className={styles.image28Icon}
              alt=""
              src="/image-281@2x.png"
            />
            <div className={styles.rating10}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
            <img
              className={styles.image30Icon}
              alt=""
              src="/image-301@2x.png"
            />
            <div className={styles.rating11}>
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <div className={styles.div}>5.0</div>
            </div>
          </div>
          <img
            className={styles.adjustSearchWithFilterItem}
            alt=""
            src="/group-91.svg"
          />
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
              <img className={styles.groupChild} alt="" src="/group-87.svg" />
            </div>
            <img className={styles.groupItem} alt="" src="/group-951.svg" />
          </div>
        </div>
        <div className={styles.filterParent}>
          <div className={styles.filter}>
            <div className={styles.filter1}>
              <div className={styles.homeIndicator2}>
                <div className={styles.line} />
              </div>
              <div className={styles.filterChild} />
              <img
                className={styles.vuesaxlinearstarIcon}
                alt=""
                src="/vuesaxlinearstar2.svg"
              />
              <img
                className={styles.vuesaxlinearstarIcon1}
                alt=""
                src="/vuesaxlinearstar2.svg"
              />
              <div className={styles.filterSearch}>Filter Search</div>
              <div className={styles.fiterrate}>
                <div className={styles.mealType}>Rating</div>
                <div className={styles.component1}>
                  <div className={styles.div12}>5</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <img
                    className={styles.component1Child}
                    alt=""
                    src="/star-53.svg"
                  />
                </div>
                <div className={styles.component2}>
                  <div className={styles.div12}>4</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar3.svg"
                  />
                  <img
                    className={styles.component1Child}
                    alt=""
                    src="/star-54.svg"
                  />
                </div>
                <div className={styles.component3}>
                  <div className={styles.div12}>3</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <img
                    className={styles.component1Child}
                    alt=""
                    src="/star-54.svg"
                  />
                </div>
                <div className={styles.component4}>
                  <div className={styles.div12}>2</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <img
                    className={styles.component1Child}
                    alt=""
                    src="/star-54.svg"
                  />
                </div>
                <div className={styles.component5}>
                  <div className={styles.div12}>1</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <img
                    className={styles.component1Child}
                    alt=""
                    src="/star-54.svg"
                  />
                </div>
              </div>
              <div className={styles.filtercategory}>
                <div className={styles.component14}>
                  <div className={styles.div}>Keto-Friendly</div>
                  <img
                    className={styles.vuesaxlinearstarIcon2}
                    alt=""
                    src="/vuesaxlinearstar1.svg"
                  />
                  <img
                    className={styles.component14Child}
                    alt=""
                    src="/star-51.svg"
                  />
                </div>
                <div className={styles.mealTypeParent}>
                  <div className={styles.mealType}>Meal Type</div>
                  <div className={styles.component11}>
                    <div className={styles.div}>All</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component21}>
                    <div className={styles.div}>15-Minute Recipes</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar3.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-53.svg"
                    />
                  </div>
                  <div className={styles.component41}>
                    <div className={styles.div}>Breakfast</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar2.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component51}>
                    <div className={styles.div}>Lunch</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component9}>
                    <div className={styles.div}>Snacks</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component10}>
                    <div className={styles.div}>Soup/Stew</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component111}>
                    <div className={styles.div}>Holiday</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component12}>
                    <div className={styles.div}>Dinner</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component6}>
                    <div className={styles.div}>Salad</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component7}>
                    <div className={styles.div}>Baked Goods</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component8}>
                    <div className={styles.div}>Keto-Friendly</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                  <div className={styles.component13}>
                    <div className={styles.div}>Dessert</div>
                    <img
                      className={styles.vuesaxlinearstarIcon2}
                      alt=""
                      src="/vuesaxlinearstar1.svg"
                    />
                    <img
                      className={styles.component14Child}
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.smallButton}
                onClick={onSmallButtonContainerClick}
              >
                <div className={styles.label}>Filter Results</div>
              </div>
            </div>
            <div className={styles.dietaryRestrictionsParent}>
              <div className={styles.dietaryRestrictions}>
                Dietary Restrictions
              </div>
              <div className={styles.component22}>
                <div className={styles.div}>Gluten-Free</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar3.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-53.svg"
                />
              </div>
              <div className={styles.component31}>
                <div className={styles.div}>Vegetarian</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component91}>
                <div className={styles.div}>Lactose-Free</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component42}>
                <div className={styles.div}>Halal</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component52}>
                <div className={styles.div}>Vegan</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component61}>
                <div className={styles.div}>Kosher</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component81}>
                <div className={styles.div}>Nut-free</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
              <div className={styles.component71}>
                <div className={styles.div}>Pescetarian</div>
                <img
                  className={styles.vuesaxlinearstarIcon2}
                  alt=""
                  src="/vuesaxlinearstar1.svg"
                />
                <img
                  className={styles.component14Child}
                  alt=""
                  src="/star-51.svg"
                />
              </div>
            </div>
            <img
              className={styles.vuesaxoutlinesetting4Icon}
              alt=""
              src="/vuesaxoutlinesetting41.svg"
            />
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/vuesaxlinearstar2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupFrame;
