import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCartProcessOfDele.module.css";

const ShoppingCartProcessOfDele = () => {
  const navigate = useNavigate();

  const onAddToYourClick = useCallback(() => {
    navigate("/shopping-cart-after-add-to-your-shopping-list-pressed");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  return (
    <div className={styles.shoppingCartProcessOfDele}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.shoppingCartProcessOfDeleChild} />
      <div className={styles.shoppingCartProcessOfDeleItem} />
      <div className={styles.shoppingCartProcessOfDeleInner} />
      <div className={styles.gCrushedTomatoes}>600g crushed tomatoes</div>
      <div className={styles.gSpaghettiNoodles}>800g spaghetti noodles</div>
      <div className={styles.addToYour} onClick={onAddToYourClick}>
        Add to your shopping list
      </div>
      <div className={styles.header}>
        <div className={styles.shoppingCart}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.shoppingCart1}>
          <p className={styles.blankLine}>[User]’s Shopping List</p>
        </div>
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
            className={styles.groupInner}
            alt=""
            src="/group-87.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <img
          className={styles.groupIcon}
          alt=""
          src="/group-951.svg"
          onClick={onGroupIcon1Click}
        />
      </div>
      <img className={styles.icon} alt="" src="/2891491-1@2x.png" />
      <div className={styles.gSeaSalt}>400g sea salt</div>
    </div>
  );
};

export default ShoppingCartProcessOfDele;
