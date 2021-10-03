import React from "react";
import Button from "./Button";
import Card from "./Card";

import styles from './Modal.module.css';

function Modal(props) {
    return (
        <div className={styles.modalBg} onClick={props.onCtaClick}>
            <Card>
                <header className="bg-dark text-light">
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onCtaClick}>{props.cta || 'Okay!'}</Button>
                </footer>
            </Card>
        </div>
    );
}

export default Modal;