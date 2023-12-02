import { useState, useCallback } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = () => {
  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  const onCardsContainerClick = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
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
      <div className={styles.profile}>
        <div className={styles.profileChild} />
        <div className={styles.tabs}>
          <div className={styles.tabs1}>
            <div className={styles.label}>Recipe</div>
          </div>
          <div className={styles.tabs2}>
            <div className={styles.label}>Tag</div>
          </div>
          <div className={styles.tabs3}>
            <div className={styles.label}>Videos</div>
          </div>
        </div>
        <div className={styles.cards} onClick={onCardsContainerClick}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6467@2x.png"
            />
            <div className={styles.cardItem} />
            <img className={styles.bookmarkIcon} alt="" src="/bookmark4.svg" />
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle}>Traditional spare ribs baked</div>
            <div className={styles.creator}>By Chef John</div>
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
            <img className={styles.bookmarkIcon} alt="" src="/bookmark4.svg" />
            <div className={styles.rating1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle1}>
              spice roasted chicken with flavored rice
            </div>
            <div className={styles.creator1}>By Mark Kelvin</div>
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
            <div className={styles.creator}>By Spicy Nelly</div>
            <img className={styles.bookmarkIcon2} alt="" src="/bookmark4.svg" />
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
            <img className={styles.bookmarkIcon3} alt="" src="/bookmark4.svg" />
          </div>
        </div>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group6@2x.png"
        />
        <div className={styles.recipe}>
          <div className={styles.div}>Recipe</div>
          <div className={styles.title}>4</div>
        </div>
        <div className={styles.followers}>
          <div className={styles.div}>Followers</div>
          <div className={styles.m}>2.5M</div>
        </div>
        <div className={styles.following}>
          <div className={styles.div}>Following</div>
          <div className={styles.m}>259</div>
        </div>
        <div className={styles.label5}>Afuwape Abiodun</div>
        <div className={styles.bio}>
          <span className={styles.bioTxt}>
            <p className={styles.privateChef}>Private Chef</p>
            <p className={styles.privateChef}>
              Passionate about food and life 🥘🍲🍝🍱
            </p>
            <p className={styles.more}>More...</p>
          </span>
        </div>
        <div className={styles.bio1}>Chef</div>
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
        <div className={styles.header}>
          <div className={styles.title1}>Profile</div>
        </div>
        <div className={styles.header1}>
          <div className={styles.title2}>Ingrident</div>
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

export default Profile;
