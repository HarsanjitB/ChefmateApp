import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ActiveTimedTask.module.css";
import AddTimerButton from "../pages/AddTimerButton";
import Timer from '../pages/Timer';
import AddTimerPopup from '../pages/AddTimerPopup'; // Import the new component

const ActiveTimedTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = location.state.recipe;

  // Update the step notes in the recipe when the textarea loses focus
const handleBlur = () => {
  if (recipe && recipe.steps && recipe.steps[currentStepIndex]) {
    recipe.steps[currentStepIndex].stepDescription = editableStepNotes;
  }
};

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [timers, setTimers] = useState([
    // Add more timers as needed
  ]);

  const closeAddTimerPopup = useCallback(() => {
    setAddTimerPopupOpen(false);
  }, []);

  const onAddTimer = useCallback((duration) => {
    // Add a new timer to the timers array with the specified duration
    setTimers([...timers, { name: 'New Timer', duration }]);
    closeAddTimerPopup();
  }, [timers, closeAddTimerPopup]);

  const onDeleteTimer = useCallback((index) => {
    // Remove the timer at the specified index from the timers array
    const updatedTimers = [...timers];
    updatedTimers.splice(index, 1);
    setTimers(updatedTimers);
  }, [timers]);

  const [isAddTimerPopupOpen, setAddTimerPopupOpen] = useState(false);

  const openAddTimerPopup = useCallback(() => {
    setAddTimerPopupOpen(true);
  }, []);

  const onVuesaxlineararrowLeftIconClick = useCallback(() => {
    if (currentStepIndex + 1 >= recipe.steps.length) {
      // If there are no more steps, navigate to the recipe complete page
      navigate("/recipe-complete");
    } else {
      // Otherwise, go to the next step
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
    }
  }, [navigate, currentStepIndex, recipe]);

  const onVuesaxlineararrowLeftIcon1Click = useCallback(() => {
    if (currentStepIndex == 0) {
      // If there are no more steps, navigate to the ingredient task page
      navigate("/ingredient-task", { state: { recipe } });
    } else {
      // Otherwise, go to the previous step
      setCurrentStepIndex((prevIndex) => prevIndex - 1);
    }
  }, [navigate, currentStepIndex, recipe]);

  const openActiveTimedTaskGreyedOut = useCallback(() => {
    setActiveTimedTaskGreyedOutOpen(true);
  }, []);

  const closeActiveTimedTaskGreyedOut = useCallback(() => {
    setActiveTimedTaskGreyedOutOpen(false);
  }, []);

  // Update the step, stepNotesContent, mediaSectionIconSrc, stepTime, stepName, and ingredients variables
  const step = `Step ${currentStepIndex + 1}`;
  
  let stepNotesContent = " ";
  if (recipe && recipe.steps && recipe.steps[currentStepIndex]) {
    stepNotesContent = recipe.steps[currentStepIndex].stepDescription || " ";
  }

  // Update the editable step notes whenever stepNotesContent changes
  useEffect(() => {
    setEditableStepNotes(stepNotesContent);
  }, [stepNotesContent]);
  const [editableStepNotes, setEditableStepNotes] = useState(stepNotesContent);

  const mediaSectionIconSrc = "/media-section1@2x.png"; // Placeholder image
  const stepTime = recipe.steps[currentStepIndex].stepTime;
  const stepName = recipe.steps[currentStepIndex].stepName;
  const ingredients = recipe.ingredients.filter(ingredient => 
    recipe.steps[currentStepIndex].ingList.includes(ingredient.name)
  );
  
  return (
    <>
      <div className={styles.activeTimedTask} style={{ backgroundColor: stepTime <= 0 || stepTime === null ? 'var(--color-lightgreen)' : '' }}>
        {stepTime && stepTime > 0 && (
          <div className={styles.smallButton} onClick={() => onAddTimer(stepTime * 60)}>
            <div className={styles.label}>Start Timer [{stepTime}]</div>
          </div>
        )}
        <div className={styles.content}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft2.svg"
            onClick={onVuesaxlineararrowLeftIconClick}
          />
          <div className={styles.stepNotesSection}>
          <textarea
            className={styles.stepNotes}
            value={editableStepNotes}
            onChange={(e) => setEditableStepNotes(e.target.value)}
            onBlur={handleBlur}
          />
          </div>
          <img
            className={styles.mediaSectionIcon}
            alt=""
            src={mediaSectionIconSrc}
          />
          <div className={styles.ingredientSection}>
            <div className={styles.ingredientSection1}>
              <div className={styles.ingredients}>
                <div className={styles.ingredientsForStep}>
                  {ingredients.map((ingredient, index) => (
                    <div className={styles.recipe2} key={index}>
                      <div className={styles.bg} />
                      <div className={styles.quantity}>{ingredient.quantity}</div>
                      <div className={styles.name}>{ingredient.name}</div>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src={ingredient.imageSrc}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.neededForThisContainer}>
              <p className={styles.neededForThis}>Needed for this step:</p>
            </div>
          </div>
          <div className={styles.stepOverviewSection}>
          {stepTime && stepTime > 0 && (
              <div className={styles.stepOverview}>(Time: ~{stepTime} minutes)</div>
          )}
            <div className={styles.stepOverview1}>{stepName}</div>
          </div>
          <div className={styles.header}>
            <img
              className={styles.vuesaxlineararrowLeftIcon1}
              alt=""
              src="/vuesaxlineararrowleft3.svg"
              onClick={onVuesaxlineararrowLeftIcon1Click}
            />
            <img
              className={styles.vuesaxlinearmoreIcon}
              alt=""
              src="/vuesaxlinearmore2.svg"
              onClick={openActiveTimedTaskGreyedOut}
            />
            <div className={styles.stepNumber}>{step}</div>
          </div>
        </div>
        <div className={styles.timers}>
          <div className={styles.timers1}>
            {timers.map((timer, index) => (
              <Timer key={index} name={timer.name} duration={timer.duration} onDelete={() => onDeleteTimer(index)} />
            ))}
            <AddTimerButton onClick={openAddTimerPopup} />
          </div>
        </div>
        {isAddTimerPopupOpen && (
          <AddTimerPopup onClose={closeAddTimerPopup} onAddTimer={onAddTimer} />
        )}
      </div>
    </>
  );
};

export default ActiveTimedTask;
