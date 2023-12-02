import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IngredientTask.module.css";

const IngredientTask = () => {
  const navigate = useNavigate();

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/untimed-task");
  }, [navigate]);

  const onHeaderClick = useCallback(() => {
    navigate("/recipeingredient");
  }, [navigate]);

  return (
    <div className={styles.ingredientTask}>
      <img
        className={styles.vuesaxlineararrowLeftIcon}
        alt=""
        src="/vuesaxlineararrowleft7.svg"
        onClick={onVuesaxlineararrowLeftIconClick}
      />
      <div className={styles.stepNotesSection}>
        <div className={styles.stepNotes}>
          <ul className={styles.gatherAllNeededIngredients}>
            <li className={styles.gatherAllNeeded}>
              Gather all needed ingredients
            </li>
            <li>
              Remember to keep any raw meat separated to prevent
              cross-contamination
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.recipeWrapper}>
          <div className={styles.recipe}>
            <div className={styles.recipe1}>
              <div className={styles.bg} />
              <div className={styles.label}>500g</div>
              <div className={styles.tomatos}>Tomatos</div>
              <img className={styles.imageIcon} alt="" src="/image21@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label1}>300g</div>
              <div className={styles.cabbage}>Cabbage</div>
              <img className={styles.imageIcon1} alt="" src="/image22@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <img className={styles.bgIcon} alt="" src="/bg1.svg" />
              <div className={styles.label2}>300g</div>
              <div className={styles.taco}>Taco</div>
              <img className={styles.imageIcon2} alt="" src="/image23@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.sliceBread}>Slice Bread</div>
              <img className={styles.imageIcon1} alt="" src="/image24@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.greenOnion}>Green onion</div>
              <img className={styles.imageIcon1} alt="" src="/image25@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.omelette}>Omelette</div>
              <img className={styles.imageIcon1} alt="" src="/image26@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.hotDog}>Hot Dog</div>
              <img className={styles.imageIcon1} alt="" src="/image27@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.oninon}>Oninon</div>
              <img className={styles.imageIcon1} alt="" src="/image28@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.lettuce}>Lettuce</div>
              <img className={styles.imageIcon1} alt="" src="/image29@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.spinach}>Spinach</div>
              <img className={styles.imageIcon1} alt="" src="/image30@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.redGreen}>{`Red & Green Chilli`}</div>
              <img className={styles.imageIcon1} alt="" src="/image31@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.fries}>Fries</div>
              <img className={styles.imageIcon1} alt="" src="/image32@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label3}>300g</div>
              <div className={styles.spinach}>Chicken</div>
              <img className={styles.imageIcon1} alt="" src="/image33@2x.png" />
            </div>
            <div className={styles.recipe1}>
              <div className={styles.bg1} />
              <div className={styles.label13}>300g</div>
              <div className={styles.burger}>Burger</div>
              <img
                className={styles.imageIcon13}
                alt=""
                src="/image34@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stepOverviewSection}>
        <div className={styles.stepOverview}>Prepare Ingredients</div>
      </div>
      <img
        className={styles.headerIcon}
        alt=""
        src="/header.svg"
        onClick={onHeaderClick}
      />
    </div>
  );
};

export default IngredientTask;
