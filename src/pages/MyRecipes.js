import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyRecipes.module.css";
import { myRecipesList } from "../Lists";
import { setCurrentRecipe } from "../Lists";
import { useState } from "react";
import { useEffect } from "react";

const MyRecipes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.classList.contains(styles.deleteButton)) {
        setDeleteButtonClicked(Array(myRecipesList.length).fill(false));
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [myRecipesList.length, styles.deleteButton]);

  const [deleteButtonClicked, setDeleteButtonClicked] = useState(Array(myRecipesList.length).fill(false));

  const handleDeleteButtonClick = (event, index) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements

    if (deleteButtonClicked[index]) {
      myRecipesList.splice(index, 1); // Remove the recipe from the list
      // Add code here to update the state and re-render the component
      setDeleteButtonClicked(deleteButtonClicked.map((item, i) => i === index ? false : item)); // Reset the state variable for the clicked button
    } else {
      setDeleteButtonClicked(deleteButtonClicked.map((item, i) => i === index ? true : item)); // Set the state variable for the clicked button to true
    }
  };

  const onCardsContainerClick = useCallback((id) => {
    setCurrentRecipe(myRecipesList[id])
    navigate("/recipeingredient1");
  }, [navigate]);

  const onCardsContainer1Click = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onCardsContainer2Click = useCallback(() => {
    navigate("/recipeingredient1");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/create-recipe-ingredients");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  return (
    <div className={styles.myRecipes}>
      <div className={styles.myRecipesChild} />
      <div className={styles.myRecipes1}>My Recipes</div>
      <div >
        <ul className={styles.cards} >
              {myRecipesList.map((item,index) =>(
                <li className={styles.cardContainer} id={index} onClick={() => onCardsContainerClick(index)}>
                  <div >
                  <div className={styles.card}>
                    <img className={styles.cardChild} alt="" src={item.imgPath} />
                    <div className={styles.cardItem} />
                    <div className={styles.bookmark}>
                    <div className={styles.bookmarkChild} />
                    <img
                      className={styles.image23Icon}
                      alt=""
                      src="/image-23@2x.png"
                    />
                  </div>
                    <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
                    
                    <div className={styles.rating}>
                      <img className={styles.starIcon} alt="" src="/star.svg" />
                      <div className={styles.div}>4.0</div>
                    </div>
                    
                    <div className={styles.foodTitle}>
                      {item.name}
                    </div>
                    <button className={`${styles.deleteButton} ${deleteButtonClicked[index] ? styles.deleteButtonClicked : ''}`} onClick={(event) => handleDeleteButtonClick(event, index)}>Delete</button>
                    <div className={styles.time}>
                      <img
                        className={styles.vuesaxoutlinetimerIcon}
                        alt=""
                        src="/vuesaxoutlinetimer1.svg"
                      />
                      <div className={styles.div}>{item.time}</div>
                      
                    </div>
                  </div>
                  
                  </div>
                  
                </li>
              ))}
            </ul>
        {}
        <img
          className={styles.cardsChild}
          alt=""
          src="/group-86.svg"
          onClick={onGroupIconClick}
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.imageParent}>
          <div className={styles.image} />
          <div className={styles.savedParent}>
            <div className={styles.saved}></div>
            <img
              className={styles.iconnavbookmarkinactive}
              alt=""
              src="/iconnavbookmarkinactive2.svg"
              onClick={onIconNavBookmarkInactiveClick}
            />
          </div>
          <div className={styles.cartParent} onClick={onGroupContainer1Click}>
            <div className={styles.cart}></div>
            <img
              className={styles.iconCartAlt}
              alt=""
              src="/-icon-cart-alt.svg"
            />
          </div>
          <img className={styles.groupChild} alt="" src="/group-87.svg" onClick={onHomeClick} />
        </div>
        <img className={styles.groupItem} alt="" src="/group-95.svg" />
      </div>
    </div>
  );
};

export default MyRecipes;

/*/* <div className={styles.cards1} onClick={onCardsContainerClick}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6467@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.bookmark}>
              <div className={styles.bookmarkChild} />
              <img
                className={styles.image23Icon}
                alt=""
                src="/image-23@2x.png"
              />
            </div>
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
        </div>
        <div className={styles.cards2} onClick={onCardsContainer1Click}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6467@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.bookmark}>
              <div className={styles.bookmarkChild} />
              <img
                className={styles.image23Icon}
                alt=""
                src="/image-23@2x.png"
              />
            </div>
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
        </div> }
        { <div className={styles.cards3} onClick={onCardsContainer2Click}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-6467@2x.png"
            />
            <div className={styles.cardItem} />
            <div className={styles.bookmark}>
              <div className={styles.bookmarkChild} />
              <img
                className={styles.image23Icon}
                alt=""
                src="/image-23@2x.png"
              />
            </div>
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
        </div> */