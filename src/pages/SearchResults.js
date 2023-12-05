

import styles from './SavedRecipe.module.css';

const SearchResults = ({ searchResults, onResultClick }) => {
  return (
    <ul className={styles.cards1}>
      {searchResults.map((item, index) => (
        <li id={index} onClick={() => onResultClick(index)}>
          <div className={styles.card}>
            <img className={styles.cardChild} alt="" src={item.imgPath} />
            <div className={styles.cardItem} />
            <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.0</div>
            </div>
            <div className={styles.foodTitle}>
              {item.name}
            </div>
            <div className={styles.time}>
              <img
                className={styles.vuesaxoutlinetimerIcon}
                alt=""
                src="/vuesaxoutlinetimer1.svg"
              />
              <div className={styles.div}>{item.time}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;