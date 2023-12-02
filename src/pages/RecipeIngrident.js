import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeIngrident.module.css";

const RecipeIngrident = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onTabsContainer1Click = useCallback(() => {
    navigate("/recipeprocedure");
  }, [navigate]);

  const onTabsContainer2Click = useCallback(() => {
    navigate("/ingredient-task");
  }, [navigate]);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recipeingrident}>
        <div className={styles.recipeingridentChild} />
        <div className={styles.card}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.cardChild} />
          <div className={styles.rating}>
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.div}>4.0</div>
          </div>
          <div className={styles.foodTitle}>
            Spicy chicken burger with French fries
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark1.svg" />
          <div className={styles.time}>
            <img
              className={styles.vuesaxoutlinetimerIcon}
              alt=""
              src="/vuesaxoutlinetimer1.svg"
            />
            <div className={styles.div}>20 min</div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.totalReviews}>(13k Reviews)</div>
          </div>
        </div>
        <div className={styles.time1}>
          <div className={styles.div}>10 Items</div>
        </div>
        <div className={styles.creatorsProfile}>
          <div className={styles.creator}>
            <img
              className={styles.unsplashij24uq1smwmIcon}
              alt=""
              src="/unsplashij24uq1smwm@2x.png"
            />
            <div className={styles.info}>
              <div className={styles.location}>
                <div className={styles.label}>Lagos, Nigeria</div>
                <img
                  className={styles.vuesaxboldlocationIcon}
                  alt=""
                  src="/vuesaxboldlocation1.svg"
                />
              </div>
              <div className={styles.label1}>Laura wilson</div>
            </div>
          </div>
          <div className={styles.smallButton}>
            <div className={styles.label2}>Follow</div>
          </div>
        </div>
        <div className={styles.component3}>
          <div className={styles.tabs}>
            <div className={styles.label3}>Ingredients</div>
          </div>
          <div className={styles.tabs1} onClick={onTabsContainer1Click}>
            <div className={styles.label3}>Procedure Overview</div>
          </div>
        </div>
        <div className={styles.tabs2} onClick={onTabsContainer2Click}>
          <div className={styles.label3}>Start Interactive Cooking</div>
        </div>
        <div className={styles.recipeWrapper}>
          <div className={styles.recipe}>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label6}>500g</div>
              <div className={styles.tomatos}>Tomatos</div>
              <img className={styles.imageIcon1} alt="" src="/image35@2x.png" />
              <img className={styles.imageIcon2} alt="" src="/image5@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label6}>300g</div>
              <div className={styles.cabbage}>Cabbage</div>
              <img className={styles.imageIcon2} alt="" src="/image36@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image35@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <img className={styles.bgIcon} alt="" src="/bg2.svg" />
              <div className={styles.label8}>300g</div>
              <div className={styles.cabbage}>Taco</div>
              <img className={styles.imageIcon2} alt="" src="/image37@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image35@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label8}>300g</div>
              <div className={styles.cabbage}>Taco</div>
              <img className={styles.imageIcon2} alt="" src="/image37@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image35@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Slice Bread</div>
              <img className={styles.imageIcon2} alt="" src="/image38@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image35@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Green onion</div>
              <img className={styles.imageIcon2} alt="" src="/image9@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Omelette</div>
              <img className={styles.imageIcon2} alt="" src="/image10@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Hot Dog</div>
              <img className={styles.imageIcon2} alt="" src="/image11@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Oninon</div>
              <img className={styles.imageIcon2} alt="" src="/image1@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Lettuce</div>
              <img className={styles.imageIcon2} alt="" src="/image12@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Spinach</div>
              <img className={styles.imageIcon2} alt="" src="/image13@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>{`Red & Green Chilli`}</div>
              <img className={styles.imageIcon2} alt="" src="/image14@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Fries</div>
              <img className={styles.imageIcon2} alt="" src="/image15@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Chicken</div>
              <img className={styles.imageIcon2} alt="" src="/image16@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label10}>300g</div>
              <div className={styles.cabbage}>Burger</div>
              <img className={styles.imageIcon2} alt="" src="/image17@2x.png" />
            </div>
          </div>
        </div>
        <img className={styles.component4Icon} alt="" src="/component-4.svg" />
        <div className={styles.header}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft1.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.title}>Ingrident</div>
          <img
            className={styles.vuesaxlinearmoreIcon}
            alt=""
            src="/vuesaxlinearmore1.svg"
            onClick={openActionListContainer}
          />
        </div>
      </div>
      {isActionListContainerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeActionListContainer}
        >
          <ActionListContainer onClose={closeActionListContainer} />
        </PortalPopup>
      )}
    </>
  );
};

export default RecipeIngrident;
