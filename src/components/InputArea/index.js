import React from "react";
import styles from "./style.module.css";

const InputArea = () => {
  return (
    <div className={styles.inputArea_wrapper}>
      <textarea
        name="writingSpace"
        id="text_area"
        className={styles.inputArea}
        cols="50"
        rows="10"
      ></textarea>
    </div>
  );
};

export default InputArea;
