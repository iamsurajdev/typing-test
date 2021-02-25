import React from "react";
import styles from "./style.module.css";

const TypingSpeedInfoBlock = ({ text, color }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: `${color}` }}>
      <span>{text}</span>
    </div>
  );
};

export default TypingSpeedInfoBlock;
