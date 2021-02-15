import React, { useState } from "react";
import InputArea from "./components/InputArea";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Hello</h1>
      <InputArea state={input} setState={setInput} />
    </>
  );
};

export default App;
