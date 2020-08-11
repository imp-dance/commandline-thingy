import React, { useState, useRef } from "react";
import styled from "styled-components";

import { colors, whitespace } from "../helpers/constants";

interface InputBoxInterface {
  inputRef: React.Ref<HTMLInputElement>;
}

const InputBox: React.FC<InputBoxInterface> = ({ inputRef }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputBoxContainer>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
    </InputBoxContainer>
  );
};

const InputBoxContainer = styled.div`
  margin-top: auto;
  background: ${colors.inputBackground};
  display: flex;

  input {
    padding: ${whitespace.padding};
    background: ${colors.inputBackground};
    width: 100%;
    color: ${colors.textNormal};
    font-family: "Source Code Pro", monospace;
  }
`;

export default InputBox;
