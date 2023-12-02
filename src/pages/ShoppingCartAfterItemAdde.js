import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCartAfterItemAdde.module.css";

const ShoppingCartAfterItemAdde = () => {
  const navigate = useNavigate();

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  return (
    <div className={styles.shoppingCartAfterItemAdde}>
      <div className={styles.shoppingCartAfterItemAddeChild} />
      <div className={styles.shoppingCartAfterItemAddeItem} />
      <div className={styles.shoppingCartAfterItemAddeInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.shoppingCartAfterItemAddeChild1} />
      <div className={styles.shoppingCartAfterItemAddeChild2} />
      <div className={styles.ellipseDiv} />
      <div className={styles.sliceDiv} />
      <div className={styles.gCrushedTomatoes}>600g crushed tomatoes</div>
      <div className={styles.gSpaghettiNoodles}>800g spaghetti noodles</div>
      <div className={styles.gGroundBeef}>400g ground beef</div>
      <div className={styles.eggs}>6 eggs</div>
      <div className={styles.tacoShells}>8 taco shells</div>
      <div className={styles.gShreddedCheddar}>400g shredded cheddar</div>
      <div className={styles.gSeaSalt}>400g sea salt</div>
      <div className={styles.lineDiv} />
      <div className={styles.gSeaSalt1}>400g sea salt</div>
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

export default ShoppingCartAfterItemAdde;
