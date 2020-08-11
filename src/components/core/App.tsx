import React, { useRef, useState } from "react";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { colors, fontsizes } from "../helpers/constants";
import InputBox from "./InputBox";
import Output from "./Output";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [history, setHistory] = useState([""]);
  const [output, setOutput] = useState<any>([]);
  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const focusInput = () => {
    inputRef && inputRef.current && inputRef.current.focus();
  };
  const getPreviousValue = () => setInputValue(prevValue);
  const pushOutput = (entry: any) => {
    setOutput([...output, entry]);
  };
  const runCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const command = inputValue;
    setPrevValue(command);
    setHistory([...history, command]);
    setInputValue("");
    switch (true) {
      case command.trim() === "history":
        pushOutput(history.map((item) => <div key={uniqueId()}>{item}</div>));
        break;
      default:
        return;
    }
  };
  return (
    <Container>
      <Output focusInput={focusInput} output={output} />
      <InputBox
        reference={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={runCommand}
        onArrowUp={getPreviousValue}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: ${colors.background};
  color: ${colors.textNormal};
  font-family: "Source Code Pro", monospace;
  font-size: ${fontsizes.normal};
`;

export default App;
