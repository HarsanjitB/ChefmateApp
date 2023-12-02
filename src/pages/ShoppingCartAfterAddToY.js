import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCartAfterAddToY.module.css";

const ShoppingCartAfterAddToY = () => {
  const navigate = useNavigate();

  const onAddTextClick = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.shoppingCartAfterAddToY}>
      <div className={styles.shoppingCartAfterAddToYChild} />
      <div className={styles.shoppingCartAfterAddToYItem} />
      <div className={styles.shoppingCartAfterAddToYInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.shoppingCartAfterAddToYChild1} />
      <div className={styles.ellipseDiv} />
      <div className={styles.sliceDiv} />
      <div className={styles.gCrushedTomatoes}>600g crushed tomatoes</div>
      <div className={styles.gSpaghettiNoodles}>800g spaghetti noodles</div>
      <div className={styles.gGroundBeef}>400g ground beef</div>
      <div className={styles.eggs}>6 eggs</div>
      <div className={styles.tacoShells}>8 taco shells</div>
      <div className={styles.shreddedCheddar}>shredded cheddar</div>
      <div className={styles.shoppingCartAfterAddToYChild2} />
      <div className={styles.lineDiv} />
      <div className={styles.gSpaghettiNoodles1}>800g spaghetti noodles</div>
      <div className={styles.add} onClick={onAddTextClick}>
        Add
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
    </div>
  );
};

export default ShoppingCartAfterAddToY;
