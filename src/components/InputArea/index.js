import React from "react";
import styles from "./style.module.css";

const InputArea = ({ state, setState }) => {
  return (
    <div className={styles.inputArea_wrapper}>
      <textarea
        name="writingSpace"
        id="text_area"
        className={styles.inputArea}
        cols="50"
        rows="10"
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
    </div>
  );
};

export default InputArea;
