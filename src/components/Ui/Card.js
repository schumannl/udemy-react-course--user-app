import React from "react";

import styles from './Card.module.css';

function Card(props) {
    return (  
        <div className={styles.customCard}>{props.children}</div>
    );
}

export default Card;