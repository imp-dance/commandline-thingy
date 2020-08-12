import React, { useRef, useState } from "react";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { colors, fontsizes, whitespace } from "../helpers/constants";
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
  const filterArray = (el: any) => el !== null && el !== "";
  const runCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const command = inputValue.trim();
    if (command.trim() === "") return;
    setPrevValue(command);
    setHistory([...history.filter(filterArray), command]);
    setInputValue("");
    switch (true) {
      case command === "history":
        pushOutput([
          <Command>history</Command>,
          <HistoryBox>
            {history.map((item) =>
              item !== "" ? <li key={uniqueId()}>{item}</li> : ""
            )}
          </HistoryBox>,
        ]);
        break;
      case command.startsWith("echo "):
        pushOutput(
          <div>
            <Command>echo</Command> {command.substring(5)}
          </div>
        );
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

const Command = styled.span`
  color: ${colors.textCommand};
`;

const HistoryBox = styled.ul`
  padding-left: 22px;
  list-style: circle;
`;

export default App;
