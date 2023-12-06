import { useState, useCallback, useEffect } from "react";
import ActionListContainer from "../components/ActionListContainer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipeIngredients4.module.css";
import { appendMyRecipes } from '../Lists';
import { useLocation } from 'react-router-dom';

const CreateRecipeIngredients4 = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  
  const [recipeName, setRecipeName] = useState(recipe?.name || "");
  const [recipeDescription, setRecipeDescription] = useState(recipe?.description || "");
  const [recipeTime, setRecipeTime] = useState(recipe?.time || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || []);
  const [steps, setSteps] = useState(recipe?.steps.map(step => ({
    name: step.stepName,
    description: step.stepDescription,
    time: step.stepTime,
    mediaLink: step.stepImgPath,
    ingredients: step.ingList
  })) || []);
  const [isAddIngredientOpen, setAddIngredientOpen] = useState(false);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [currentList, setCurrentList] = useState('ingredients');
  const [isAddStepOpen, setAddStepOpen] = useState(false);
  const [stepName, setStepName] = useState("");
  const [stepDescription, setStepDescription] = useState("");
  const [stepTime, setStepTime] = useState("");
  const [stepMediaLink, setStepMediaLink] = useState("");
  const [stepIngredients, setStepIngredients] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isActionListContainerOpen, setActionListContainerOpen] =
    useState(false);
  const navigate = useNavigate();

  function handleSaveButtonClick() {
    const currentRecipe = {
      name: recipeName,
      imgPath: "", // Set to empty as per your requirement
      description: recipeDescription,
      time: recipeTime,
      rating: 0, // Set to 0 as per your requirement
      ingredients: ingredients,
      steps: steps.map(step => {
        return {
          stepName: step.name,
          stepDescription: step.description,
          stepTime: step.time,
          stepImgPath: step.mediaLink,
          ingList: step.ingredients
        };
      }),
    };
  
    appendMyRecipes(currentRecipe);
    navigate("/my-recipes");
  }

  const onRecipe12ContainerClick = useCallback(() => {
    if (currentList === 'ingredients') {
      setAddIngredientOpen(true);
    } else {
      setAddStepOpen(true);
    }
  }, [currentList]);

  const openAddIngredient = () => {
    setAddIngredientOpen(true);
  };

  const openAddStepForm = () => {
    setStepName("");
    setStepDescription("");
    setStepTime("");
    setStepMediaLink("");
    setStepIngredients([]);
    setSelectedItem(null);
    setAddStepOpen(true);
  };

  const openAddIngredientForm = () => {
    setIngredientName("");
    setIngredientAmount("");
    setSelectedItem(null);
    setAddIngredientOpen(true);
  };

  const closeAddIngredient = useCallback(() => {
    setAddIngredientOpen(false);
  }, []);

  const closeAddStep = useCallback(() => {
    setAddStepOpen(false);
  }, []);

  const openAddStep = () => {
    setAddStepOpen(true);
  };

  const handleCancelButtonClick = useCallback(() => {
    navigate(-1); // Navigate back to the last page
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  const openActionListContainer = useCallback(() => {
    setActionListContainerOpen(true);
  }, []);

  const closeActionListContainer = useCallback(() => {
    setActionListContainerOpen(false);
  }, []);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (selectedItem !== null) {
      const newIngredients = [...ingredients];
      newIngredients[selectedItem] = { name: ingredientName, amount: ingredientAmount };
      setIngredients(newIngredients);
    } else {
      setIngredients(prevIngredients => [...prevIngredients, { name: ingredientName, amount: ingredientAmount }]);
    }
    setIngredientName("");
    setIngredientAmount("");
    setSelectedItem(null);
  };
  
  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
    setSelectedItem(null);
  };

  // Update the onTabsContainer1Click function to toggle the current list
  const onTabsContainer1Click = useCallback(() => {
    setCurrentList(prevList => prevList === 'ingredients' ? 'steps' : 'ingredients');
  }, []);

  const handleAddStep = (e) => {
    e.preventDefault();
    if (selectedItem !== null) {
      const newSteps = [...steps];
      newSteps[selectedItem] = { name: stepName, description: stepDescription, time: stepTime, mediaLink: stepMediaLink, ingredients: stepIngredients };
      setSteps(newSteps);
    } else {
      setSteps(prevSteps => [...prevSteps, { name: stepName, description: stepDescription, time: stepTime, mediaLink: stepMediaLink, ingredients: stepIngredients }]);
    }
    setStepName("");
    setStepDescription("");
    setStepTime("");
    setStepMediaLink("");
    setStepIngredients([]);
    setSelectedItem(null);
  };

  const handleAddStepIngredient = (ingredientName) => {
    if (stepIngredients.includes(ingredientName)) {
      setStepIngredients(prevStepIngredients => prevStepIngredients.filter(name => name !== ingredientName));
    } else {
      setStepIngredients(prevStepIngredients => [...prevStepIngredients, ingredientName]);
    }
  };

  const handleRemoveStepIngredient = (ingredientName) => {
    setStepIngredients(prevStepIngredients => prevStepIngredients.filter(name => name !== ingredientName));
  };

  const handleRemoveStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
    setSelectedItem(null);
  };

  return (
    <>
      <div className={styles.createRecipeIngredients}>
        <div className={styles.createRecipeIngredientsChild} />
        <div className={styles.card}>
          <div className={styles.image}>
            <div className={styles.imageChild} />
            <img className={styles.navBarMenu} alt="" src="/nav-bar-menu.svg" />
            <div className={styles.addPicture}>Add Picture</div>
          </div>
          <div className={styles.foodTitle}>Edit Name:</div>
          <div className={styles.description}>Edit Description:</div>
          <div className={styles.timeTitle}>Edit Time:</div>
        </div>
        <div className={styles.component3}>
        <div 
          className={currentList === 'ingredients' ? `${styles.tabs} ${styles.tabSelected}` : `${styles.tabs} ${styles.tabUnselected}`} 
          onClick={onTabsContainer1Click}
        >
          <div className={styles.label}>Ingredients</div>
        </div>
        <div 
          className={currentList === 'steps' ? `${styles.tabs1} ${styles.tabSelected}` : `${styles.tabs1} ${styles.tabUnselected}`} 
          onClick={onTabsContainer1Click}
        >
          <div className={styles.label}>Steps</div>
        </div>
        </div>
        <div className={styles.recipeWrapper}>
          {currentList === 'ingredients' ? (
            // Render the ingredients list
            <>
            <div className={styles.recipe12} onClick={openAddIngredientForm}>
                <div className={styles.bg} />
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image39.svg"
                />
                <div className={styles.ingredientName}>Add Ingredient</div>
              </div>
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className={styles.recipe12} 
                  onClick={() => {
                    setIngredientName(ingredient.name);
                    setIngredientAmount(ingredient.amount);
                    setSelectedItem(index);
                    openAddIngredient();
                  }}
                >
                  <div className={styles.bg} />
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image39.svg"
                  />
                  <div className={styles.ingredientName}>{ingredient.name}</div>
                  <div className={styles.ingredientAmount}>{ingredient.amount}</div>
                </div>
              ))}
              
            </>
          ) : (
            <>
            <div className={styles.recipe12} onClick={openAddStepForm}>
                <div className={styles.bg} />
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image39.svg"
                />
                <div className={styles.ingredientName}>Add Step</div>
              </div>
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={styles.recipe12} 
                  onClick={() => {
                    setStepName(step.name);
                    setStepDescription(step.description);
                    setStepTime(step.time);
                    setStepMediaLink(step.mediaLink);
                    setStepIngredients(step.ingredients);
                    setSelectedItem(index);
                    openAddStep();
                  }}
                >
                  <div className={styles.bg} />
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image39.svg"
                  />
                  <div className={styles.ingredientName}>{step.name}</div>
                  <div className={styles.ingredientAmount}>{index + 1}</div>
                  {isAddStepOpen && selectedItem === index && (
                    <div className={styles.stepIngredients}>
                      {step.ingredients.map((ingredient, i) => (
                        <div 
                          key={i} 
                          className={styles.stepIngredient} 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveStepIngredient(ingredient);
                          }}
                        >
                          {ingredient}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
            </>
          )}
        </div>
        <img className={styles.component4Icon} alt="" src="/component-4.svg" />
        <div className={styles.addTags}>Add Tags</div>        
        <div className={styles.createRecipeIngredientsItemName} />
        <input
          className={styles.writeHereName}
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <div className={styles.createRecipeIngredientsItemDescription} />
        <input
          className={styles.writeHereDescription}
          value={recipeDescription}
          onChange={(e) => setRecipeDescription(e.target.value)}
        />
        <input
          className={styles.writeHereTime}
          value={recipeTime}
          onChange={(e) => setRecipeTime(e.target.value)}
        />
        <div className={styles.buttonsContainer}>
        <div className={`${styles.button} ${styles.tabs2}`} onClick={handleSaveButtonClick}>
          <div className={styles.label}>Save</div>
        </div>
        <div className={`${styles.button} ${styles.tabs2} ${styles.cancelButton}`} onClick={handleCancelButtonClick}>
          <div className={styles.label}>Cancel</div>
        </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.imageParent}>
            <div className={styles.image1} />
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
          <img className={styles.groupItem} alt="" src="/group-95.svg" />
        </div>
        <img
          className={styles.vuesaxlineararrowLeftIcon}
          alt=""
          src="/vuesaxlineararrowleft1.svg"
          onClick={onVuesaxlineararrowLeftIconClick}
        />
        <div className={styles.header}>
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
      {isAddIngredientOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddIngredient}
        >
          <div className={styles.popupContent}>
            <form className={styles.formContainer} onSubmit={handleAddIngredient}>
              <input
                className={styles.ingredientInput}
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
                placeholder="Ingredient name"
              />
              <input
                className={styles.amountInput}
                value={ingredientAmount}
                onChange={(e) => setIngredientAmount(e.target.value)}
                placeholder="Amount"
              />
              <div className={styles.buttonContainer}>
                <button type="submit" className={`${styles.button} ${styles.addButton}`}>Add</button>
                <button type="button" className={`${styles.button} ${styles.cancelButton}`} onClick={closeAddIngredient}>Close</button>
                <button type="button" className={`${styles.button} ${styles.deleteButton}`} onClick={() => handleRemoveIngredient(selectedItem)}>Delete</button>
              </div>
            </form>
          </div>
        </PortalPopup>
      )}
      {isAddStepOpen && (
        <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeAddStep}
      >
        <div className={styles.popupContentSteps}>
          <form onSubmit={handleAddStep}>
            <input
              className={styles.stepInput}
              value={stepName}
              onChange={(e) => setStepName(e.target.value)}
              placeholder="Step name"
            />
            <input
              className={styles.stepInput}
              value={stepDescription}
              onChange={(e) => setStepDescription(e.target.value)}
              placeholder="Step description"
            />
            <input
              className={styles.stepInput}
              value={stepTime}
              onChange={(e) => setStepTime(e.target.value)}
              placeholder="Step time"
            />
            <input
              className={styles.stepInput}
              value={stepMediaLink}
              onChange={(e) => setStepMediaLink(e.target.value)}
              placeholder="Step media link"
            />
            <div>Add ingredients from the recipe:</div>
            <div className={styles.stepIngredients}>
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className={stepIngredients.includes(ingredient.name) ? styles.stepIngredientAdded : styles.stepIngredient} 
                  onClick={() => handleAddStepIngredient(ingredient.name)}
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                >
                  <span style={{ flex: 1, padding: '0 7px' }}>{ingredient.name}</span>
                  <span style={{ flex: 1, padding: '0 7px', textAlign: 'right' }}>{ingredient.amount}</span>
                  <span className={styles.addIngredient}></span>
                </div>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.addButton}>Add</button>
              <button type="button" className={styles.cancelButton} onClick={closeAddStep}>Close</button>
              <button type="button" className={styles.deleteButton} onClick={() => handleRemoveStep(selectedItem)}>Delete</button>
            </div>
          </form>
        </div>
      </PortalPopup>
      )}
    </>
  );
};

export default CreateRecipeIngredients4;
