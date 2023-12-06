import React from 'react';
import styles from "./ActiveTimedTask.module.css";

function AddTimerButton({ onClick }) {
    return (
        <button className={styles.timer} onClick={onClick} style={{ outline: 'none' }}>
                <div className={styles.timerContent}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>+</div>
                        <div className={styles.timerName}>Add Timer</div>
                </div>
        </button>
    );
}

export default AddTimerButton;