import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent from "../components/FrameComponent2";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Home1.module.css";

const Home1 = () => {
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);
  const onRecipeClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeChild} />
        <div className={styles.frame}>
          <div className={styles.featuredRecipes}>Featured Recipes</div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.basedOnYourPreferencesParent}>
            <div className={styles.featuredRecipes}>
              Based on Your Preferences
            </div>
            
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.searchParent}>
            <TextField
              className={styles.search}
              color="error"
              label="Search recipe"
              sx={{ width: 252 }}
              variant="outlined"
            />
            <button className={styles.frame3} onClick={openFramePopup}>
              <img
                className={styles.buttonFilterIcon}
                alt=""
                src="/button-filter.svg"
              />
              <img
                className={styles.vuesaxoutlinesetting4Icon}
                alt=""
                src="/vuesaxoutlinesetting4.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.savedParent}>
              <div className={styles.saved}>Saved</div>
              <img
                className={styles.iconnavbookmarkinactive}
                alt=""
                src="/iconnavbookmarkinactive5.svg"
                onClick={onIconNavBookmarkInactiveClick}
              />
            </div>
            <div className={styles.frame4}>
              <img className={styles.frameChild} alt="" src="/group-872.svg" />
              <div className={styles.cartParent}>
                <div className={styles.cart}>Cart</div>
                <img
                  className={styles.iconCartAlt}
                  alt=""
                  src="/-icon-cart-alt2.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/group-953.svg"
            onClick={onGroupIcon1Click}
          />
        </div>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.titttle}>
              <div className={styles.letsStartCooking}>
                Let’s start cooking!
              </div>
              <div className={styles.welcomeBackUsers}>
                Welcome back, [User’s Name]
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.buttonFilterParent}>
                <img
                  className={styles.buttonFilterIcon1}
                  alt=""
                  src="/button-filter1.svg"
                />
                <div className={styles.user}>[User]</div>
              </div>
              <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
              <div className={styles.image} />
              <img className={styles.groupIcon} alt="" src="/group2.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.frame9}>
            <div className={styles.image1} />
            <div className={styles.image2} />
            <div className={styles.image3} />
          </div>
        </div>
        <div className={styles.frame10}>
          <div className={styles.frame11}>
            <div className={styles.frame12}>
              <div  />
              <div >
              <img alt="" src="/image 22.png" onClick={onRecipeClick}/>
            </div>
              <div className={styles.rating}>
                <img className={styles.starIcon} alt="" src="/star2.svg" />
                <div className={styles.div}>4.5</div>
              </div>
            </div>
            <div className={styles.frame13}>
              <div />
              <div >
              <img alt="" src="/image 22.png" onClick={onRecipeClick}/>
            </div>
              <div className={styles.rating1}>
                <img className={styles.starIcon} alt="" src="/star2.svg" />
                <div className={styles.div}>5.0</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame14}>
          <div className={styles.frame15}>
            <div className={styles.minuteMealsThatAreQuickAnParent}>
              <div className={styles.minuteMealsThat}>
                15-minute meals that are quick and easy to make
              </div>
              <div className={styles.quickBites}>Quick Bites</div>
              {/* <div className={styles.readyToCook}>
                Ready to cook something delicious again?
              </div>
              <div className={styles.recentRecipes}>Recent Recipes</div> */}
            </div>
            <div className={styles.image6} >      
              <img alt="" src="/image 22.png" onClick={onRecipeClick}/>
            </div>
            <div className={styles.image7} >
              <img alt="" src="/image 22.png" onClick={onRecipeClick}/>
            </div>
            <div className={styles.rating2}>
              <img className={styles.starIcon} alt="" src="/star2.svg" />
              <div className={styles.div}>3.9</div>
            </div>
            <div className={styles.rating3}>
              <img className={styles.starIcon} alt="" src="/star2.svg" />
              <div className={styles.div}>4.4</div>
            </div>
          </div>
        </div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home1;
