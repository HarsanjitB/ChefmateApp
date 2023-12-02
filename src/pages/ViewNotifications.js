import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewNotifications.module.css";

const ViewNotifications = () => {
  const navigate = useNavigate();

  const onIconNavBookmarkInactiveClick = useCallback(() => {
    navigate("/saved-recipe");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.viewNotifications}>
      <div className={styles.viewNotificationsChild} />
      <div className={styles.tabs}>
        <div className={styles.tabs1}>
          <div className={styles.label}>All</div>
        </div>
        <div className={styles.tabs2}>
          <div className={styles.label}>{`Unread `}</div>
        </div>
        <div className={styles.tabs3}>
          <div className={styles.label}>Read</div>
        </div>
      </div>
      <div className={styles.notifications}>
        <div className={styles.todayParent}>
          <div className={styles.today}>
            <div className={styles.step4}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>10 mins ago</div>
              <div className={styles.newRecipeAlert}>New Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess.svg"
              />
            </div>
            <div className={styles.step5}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>30 mins ago</div>
              <div className={styles.newRecipeAlert}>New Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess1.svg"
              />
            </div>
            <div className={styles.step6}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>30 mins ago</div>
              <div className={styles.newRecipeAlert}>Save Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess2.svg"
              />
            </div>
            <div className={styles.foodTitle}>Today</div>
          </div>
          <div className={styles.today1}>
            <div className={styles.step4}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>10 mins ago</div>
              <div className={styles.newRecipeAlert}>New Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess.svg"
              />
            </div>
            <div className={styles.step51}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>30 mins ago</div>
              <div className={styles.newRecipeAlert}>New Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess1.svg"
              />
            </div>
            <div className={styles.step5}>
              <div className={styles.bg} />
              <div className={styles.label3}>
                Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate
                velit esse cillum
              </div>
              <div className={styles.label4}>30 mins ago</div>
              <div className={styles.newRecipeAlert}>Save Recipe Alert!</div>
              <img
                className={styles.iconTransantionSuccess}
                alt=""
                src="/icon-transantionsuccess2.svg"
              />
            </div>
            <div className={styles.foodTitle1}>Yesterday</div>
          </div>
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
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
          <img
            className={styles.groupChild}
            alt=""
            src="/group-87.svg"
            onClick={onGroupIcon1Click}
          />
        </div>
        <img className={styles.groupItem} alt="" src="/group-951.svg" />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>Your Notifications</div>
      </div>
    </div>
  );
};

export default ViewNotifications;
