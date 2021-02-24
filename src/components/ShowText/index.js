import React from "react";
import styles from "./style.module.css";

const ShowText = ({
  quote,
  started,
  ended,
  isError,
  inputRef,
  input,
  handleKeyDown,
}) => {
  return (
    <div className={styles.main}>
      {ended ? (
        <div className={styles.ended_div}>
          <span>"{quote.quote}"</span>
          <br />
          <span className={styles.ended_div_author_span}>- {quote.author}</span>
        </div>
      ) : started ? (
        <div
          className={styles.started_div}
          className={` quotes${started ? " active" : ""}${
            isError ? " is-error" : ""
          }`}
          tabIndex="0"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        >
          {input}
        </div>
      ) : (
        <div className={styles.last_section_div} tabIndex="-1" ref={inputRef}>
          {input}
        </div>
      )}
    </div>
  );
};

export default ShowText;
