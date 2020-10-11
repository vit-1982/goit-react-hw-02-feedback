import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types'

function FeedbackOptions ({options,onLeaveFeedback}) {
    return (
        <div>
            {options.map(option => (<button key={option} type="button" onClick={() => onLeaveFeedback(option)} className={styles.button}>{option}</button>))}
        </div>
    )    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;