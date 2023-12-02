import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/shopping-cart-item-marked-as-completed");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  const onAddToYourClick = useCallback(() => {
    navigate("/shopping-cart-after-add-to-your-shopping-list-pressed");
  }, [navigate]);

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCartInner} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.shoppingCartChild} />
      <div className={styles.shoppingCartItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.shoppingCartChild1} />
      <div className={styles.shoppingCartChild2} />
      <div className={styles.ellipseDiv} />
      <div className={styles.sliceDiv} />
      <div className={styles.gCrushedTomatoes}>600g crushed tomatoes</div>
      <div className={styles.gGroundBeef}>400g ground beef</div>
      <div className={styles.eggs}>6 eggs</div>
      <div className={styles.tacoShells}>8 taco shells</div>
      <div className={styles.shreddedCheddar}>shredded cheddar</div>
      <div className={styles.lineDiv} />
      <div className={styles.gSeaSalt}>400g sea salt</div>
      <div className={styles.add}>Add</div>
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
          <img className={styles.groupItem} alt="" src="/group-87.svg" />
        </div>
        <img
          className={styles.groupInner}
          alt=""
          src="/group-951.svg"
          onClick={onGroupIcon1Click}
        />
      </div>
      <div className={styles.addToYour} onClick={onAddToYourClick}>
        Add to your shopping list
      </div>
      <div className={styles.gSpaghettiNoodles}>800g spaghetti noodles</div>
      <div className={styles.header}>
        <div className={styles.shoppingCart1}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.shoppingCart2}>
          <p className={styles.blankLine}>[User]’s Shopping List</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
