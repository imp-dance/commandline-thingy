import React from "react";
import styled from "styled-components";

import { whitespace, colors } from "../helpers/constants";

interface OutputInterface {
  focusInput: () => void;
  output: [{}];
}

const Output: React.FC<OutputInterface> = ({ focusInput, output }) => {
  return (
    <OutPutContainer onClick={focusInput}>
      Type help to see commands
      {output.map((item) => (
        <OutputBox>{item}</OutputBox>
      ))}
    </OutPutContainer>
  );
};

const OutPutContainer = styled.div`
  padding: ${whitespace.padding};
  height: 100%;
`;

const OutputBox = styled.div`
  border-left: 2px solid #1c2528;
  padding-left: 5px;
  margin-left: 4px;
  margin-top: ${whitespace.boxSpacing};
`;

export default Output;
