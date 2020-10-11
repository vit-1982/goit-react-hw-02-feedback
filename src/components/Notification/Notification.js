import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification ({message}) {
    return (
        <div>
            <p className={styles.message}>{message}</p>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;