import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

function Section ({title, children}) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;