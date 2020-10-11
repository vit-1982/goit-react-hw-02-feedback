import React from 'react';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions ({options,onLeaveFeedback}) {
    return (
        <div>
            {options.map(option => (<button key={option} type="button" onClick={() => onLeaveFeedback(option)} className={styles.button}>{option}</button>))}
        </div>
    )    
}

export default FeedbackOptions;