import React from "react";
import styled from "styled-components";

import { colors, whitespace, fontsizes } from "../helpers/constants";

interface InputBoxInterface {
  reference: React.Ref<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onArrowUp: () => void;
}

const InputBox: React.FC<InputBoxInterface> = ({
  onSubmit,
  reference,
  onArrowUp,
  ...props
}) => {
  const onChange = (e: React.KeyboardEvent) => {
    if (e.keyCode === 38) onArrowUp();
  };
  return (
    <InputBoxContainer>
      <form onSubmit={onSubmit}>
        <input {...props} type="text" ref={reference} onKeyUp={onChange} />
      </form>
    </InputBoxContainer>
  );
};

const InputBoxContainer = styled.div`
  margin-top: auto;
  background: ${colors.inputBackground};
  display: flex;
  form {
    width: 100%;
  }
  input {
    padding: ${whitespace.padding};
    background: ${colors.inputBackground};
    width: 100%;
    color: ${colors.textNormal};
    font-family: "Source Code Pro", monospace;
    font-size: ${fontsizes.normal};
  }
`;

export default InputBox;
