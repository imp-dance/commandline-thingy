import React from "react";
import styled from "styled-components";

import { whitespace } from "../helpers/constants";

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
  margin-top: ${whitespace.boxSpacing};
`;

export default Output;
