import React from 'react';
import styles from './Section.module.css';

function Section ({title, children}) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

export default Section;