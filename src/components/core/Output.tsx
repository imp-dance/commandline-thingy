import React from "react";
import styled from "styled-components";

import { whitespace } from "../helpers/constants";

interface OutputInterface {
  focusInput: () => void;
}

const Output: React.FC<OutputInterface> = ({ focusInput }) => {
  return <OutPutContainer onClick={focusInput}></OutPutContainer>;
};

const OutPutContainer = styled.div`
  padding: ${whitespace.padding};
  height: 100%;
`;

export default Output;
