import React, { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent = () => {
  const cool = true;
  const navigate = useNavigate();
  const dietaryFilters = [
    { text: 'Lactose-Intolerant', clicked: false },
    { text: 'Nut-Free', clicked: false },
    { text: 'Vegan', clicked: false },
    { text: 'Vegetarian', clicked: false },
    { text: 'Gluten-Free', clicked: false },
    { text: 'Kosher', clicked: false },
    { text: 'Halal', clicked: false },
    { text: 'Keto-Friendly', clicked: false }

  ];

  const mealTypes = [
    { text: 'Breakfast', clicked: false },
    { text: 'Lunch', clicked: false },
    { text: 'Dinner', clicked: false },
    { text: 'Dessert', clicked: false },
    { text: '15-Minute Recipes', clicked: false },
    { text: 'Soup/Stew', clicked: false },
    { text: 'Salad', clicked: false },
    { text: 'Baked-Goods', clicked: false }

  ];

  const ratings = [
    { text: '5 Stars', clicked: false },
    { text: '4 Stars', clicked: false },
    { text: '3 Stars', clicked: false },
    { text: '2 Stars', clicked: false },
    { text: '1 Star', clicked: false }
  ];



  const [dietaryFiltersState, setDietaryFiltersState] = useState(dietaryFilters);
  const [mealTypesState, setMealTypesState] = useState(mealTypes);
  const [ratingState, setRatingState] = useState(ratings);
  const [filterList, setFilterList] = useState([]);

  const handleDietaryFilterClick = (index) => {
    const updatedFilters = [...dietaryFiltersState];
    updatedFilters[index].clicked = !updatedFilters[index].clicked;
    if(updatedFilters[index].clicked){
      setFilterList([...filterList, updatedFilters[index]]); 
    }
    console.log(filterList)
    setDietaryFiltersState(updatedFilters);
  };

  const handleMealTypeClick = (index) => {
    const updatedFilters = [...mealTypesState];
    updatedFilters[index].clicked = !updatedFilters[index].clicked;
    setMealTypesState(updatedFilters);
  };

  const handleRatingsClick = (index) => {
    const updatedFilters = [...ratingState];
    updatedFilters[index].clicked = !updatedFilters[index].clicked;
    setRatingState(updatedFilters);
  };

  const onSmallButtonContainerClick = useCallback(() => {
    navigate("/home");
  });



  return (
    <div className={styles.filterContainer}>
  {cool && (
    <>
      <h2>Dietary Restrictions</h2>
      <div className={styles.buttonContainer}>
        {dietaryFiltersState.map((filter, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${filter.clicked ? styles.clicked : ''}`}
            onClick={() => handleDietaryFilterClick(index)}
          >
            {filter.text}
          </button>
        ))}
      </div>
      
      <h2>Meal Type</h2>
      <div className={styles.buttonContainer}>
        {mealTypesState.map((filter, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${filter.clicked ? styles.clicked : ''}`}
            onClick={() => handleMealTypeClick(index)}
          >
            {filter.text}
          </button>
        ))}
      </div>

      <h2>Rating</h2>
      <div className={styles.buttonContainer}>
        {ratingState.map((filter, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${filter.clicked ? styles.clicked : ''}`}
            onClick={() => handleRatingsClick(index)}
          >
            {filter.text}
          </button>
        ))}
      </div>
  
    </>
  )}
</div>

  );
};

export default FrameComponent;
