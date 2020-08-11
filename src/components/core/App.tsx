import React, { useRef } from "react";
import styled from "styled-components";
import { colors } from "../helpers/constants";
import InputBox from "./InputBox";
import Output from "./Output";

const App: React.FC = () => {
  const inputRef: React.Ref<HTMLInputElement> = useRef(null);
  const focusInput = () => {
    inputRef && inputRef.current && inputRef.current.focus();
  };
  return (
    <Container>
      <Output focusInput={focusInput} />
      <InputBox inputRef={inputRef} />
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
`;

export default App;
