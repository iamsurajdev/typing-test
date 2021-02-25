import React from "react";
import styles from "./style.module.css";

const Tips = () => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>Tips..!</p>
      <ul className={styles.tips_container}>
        <li className={styles.tips}>Focus on accuracy over speed</li>
        <li className={styles.tips}>
          Stop with the hunt and peck. Hand position is an important part of
          typing.
        </li>
        <li className={styles.tips}>Stretch your hands, neck, and shoulders</li>
        <li className={styles.tips}>Learn touch typing</li>
        <li className={styles.tips}>Don,t stress </li>
      </ul>
    </div>
  );
};

export default Tips;
