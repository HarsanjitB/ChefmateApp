import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent = ({ onClose }) => {
  const navigate = useNavigate();

  const onSmallButtonContainerClick = useCallback(() => {
    navigate("/results-from-search");
  }, [navigate]);

  return (
    <div className={styles.filterParent}>
      <div className={styles.filter}>
        <div className={styles.filter1}>
          <div className={styles.homeIndicator}>
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
            <div className={styles.rating}>Rating</div>
            <div className={styles.component1}>
              <div className={styles.div}>5</div>
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
              <div className={styles.div}>4</div>
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
              <div className={styles.div}>3</div>
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
              <div className={styles.div}>2</div>
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
              <div className={styles.div}>1</div>
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
              <div className={styles.div5}>Keto-Friendly</div>
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
              <div className={styles.rating}>Meal Type</div>
              <div className={styles.component11}>
                <div className={styles.div5}>All</div>
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
                <div className={styles.div5}>15-Minute Recipes</div>
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
                <div className={styles.div5}>Breakfast</div>
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
                <div className={styles.div5}>Lunch</div>
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
                <div className={styles.div5}>Snacks</div>
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
                <div className={styles.div5}>Soup/Stew</div>
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
                <div className={styles.div5}>Holiday</div>
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
                <div className={styles.div5}>Dinner</div>
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
                <div className={styles.div5}>Salad</div>
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
                <div className={styles.div5}>Baked Goods</div>
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
                <div className={styles.div5}>Keto-Friendly</div>
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
                <div className={styles.div5}>Dessert</div>
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
          <div className={styles.dietaryRestrictions}>Dietary Restrictions</div>
          <div className={styles.component22}>
            <div className={styles.div5}>Gluten-Free</div>
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
            <div className={styles.div5}>Vegetarian</div>
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
            <div className={styles.div5}>Lactose-Free</div>
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
            <div className={styles.div5}>Halal</div>
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
            <div className={styles.div5}>Vegan</div>
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
            <div className={styles.div5}>Kosher</div>
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
            <div className={styles.div5}>Nut-free</div>
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
            <div className={styles.div5}>Pescetarian</div>
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
      <img className={styles.frameChild} alt="" src="/vuesaxlinearstar2.svg" />
    </div>
  );
};

export default FrameComponent;
