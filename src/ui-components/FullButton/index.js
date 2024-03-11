import React from 'react';
import styles from "./fullbutton.module.css";

const FullButton = ({
    label = '',
    onClickHandler = () => {}
}) => {
    const handleClick = () => {
        onClickHandler();
    };

    return (
        <div className={styles['btn-container']}>
            <button className={styles['btn-style']} onClick={handleClick}>
                {label}
            </button>
        </div>
    );
}

export default FullButton;