import React, { useState, useRef, useEffect } from "react";
import { quotesArray, random, allowedKeys } from "./util/helperFunctions";
import InputArea from "./components/InputArea";

const App = () => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const [duration, setDuration] = useState(60);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(0);
  const [quote, setQuote] = useState({});
  const [input, setInput] = useState("");
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isError, setIsError] = useState(false);
  const [lastScore, setLastScore] = useState("0");
  return (
    <>
      <h1>Hello</h1>
      <InputArea state={input} setState={setInput} />
    </>
  );
};

export default App;
