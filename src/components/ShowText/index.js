import React from "react";
import styles from "./style.module.css";

const ShowText = ({ text = "Demo text" }) => {
  return (
    <div className={styles.main}>
      <span>{text}</span>
    </div>
  );
};

export default ShowText;
