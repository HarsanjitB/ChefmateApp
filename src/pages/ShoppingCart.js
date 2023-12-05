import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import React, { useState, useRef } from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';




const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info('Leading action triggered')}>
    <div style={{ backgroundColor: 'blue', width: '100%', height: '37px' }}>
    <img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" width="45" height="35"/>

      </div>
    </SwipeAction>
    

  </LeadingActions>
);





const ShoppingCart = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const [items, setList] = useState([
    { text: '600g crushed tomatoes', clicked: false },
    { text: '400g ground beef', clicked: false },
    { text: '6 eggs', clicked: false },
    { text: '8 taco shells', clicked: false },
    { text: 'shredded cheddar', clicked: false },
    { text: '400g sea salt', clicked: false },
  ]);
  

  const inputRef = useRef();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== '') {
      const newItem = {text: inputValue, clicked: false}
      setList([...items, newItem]); 
      setInputValue('');
    }
    setShowText(!showText);
  };


  const getInputValue = () => {
    const enteredValue = inputRef.current.value;
    console.log(enteredValue);
    items.push(enteredValue);
   
  };

  const onGroupContainerClick = useCallback(() => {
    navigate("/shopping-cart-item-marked-as-completed");
  }, [navigate]);

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/my-recipes");
  }, [navigate]);

  const onAddToYourClick = useCallback(() => {
    setShowText(!showText);
    
  });

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = [...items];

    updatedItems.splice(indexToDelete, 1);
    setList(updatedItems);
  };

  const handleItemClick = (index) => {
    const updatedItems = [...items];
    updatedItems[index].clicked = !updatedItems[index].clicked;
    setList(updatedItems);
  };
  
  return (
    <div  className={styles.shoppingCart}>
      <div  onClick={onGroupContainerClick}>
        <div />
      </div>
      
  <div>
    
       <p className={styles.addToYour2} style={{ color: 'black' }} >Michael’s Shopping List</p>
  </div>
  <div className={styles.space}>
   
    </div>

    <SwipeableList>

      {items.map((item, index) => (
        <SwipeableListItem
        key={index}
        leadingActions={leadingActions()}
        onSwipeProgress={(progress) => {
          console.log(progress);
          if (progress === 100) {
            progress = 0;
            handleDeleteItem(index);
            progress = 0;
          }
        }}
      >
        <div key={index} className={styles.itemContainer}>
          <div
            className={`${styles.item} ${
              items[index].clicked ? styles.itemClicked : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item.text}
          </div>
          <div className={styles.horizontalBar}></div>
        </div>
      </SwipeableListItem>
        
      ))}
         </SwipeableList>


    
     
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
              src={location.pathname === "/shopping-cart" ? "/-icon-cart-alt-grey.svg" : "/-icon-cart-alt-grey.svg"}
            />
          </div>
          <img className={styles.groupItem} alt="" src="/group-87.svg" onClick={onHomeClick}/>
        </div>
        <img
          className={styles.groupInner}
          alt=""
          src="/group-951.svg"
          onClick={onGroupIcon1Click}
        />
      </div>
      {showText && <div className={styles.addToYour} onClick={onAddToYourClick}>
        Add to your shopping list
      </div> }
      {!showText && <div className={styles.addToYour3} /*onClick={onAddToYourClick}*/>
   
      <input onChange={handleInputChange} className="contentEditable" ref={inputRef} placeholder="Enter item here" style={{
        
        border: '1px solid #ccc',
        minHeight: '100px',
        padding: '8px',
        borderRadius: '4px',
        


       
      }} />
    
    <div className={styles.addButton} onClick={handleAddToList}>Add</div>
      </div> }
      <div className={styles.header}>
        <div className={styles.shoppingCart1}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.shoppingCart2}>
       
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
