import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function InputContainer({ children }: ContainerType) {
   return <InputContainerStyled>{children}</InputContainerStyled>;
}

const InputContainerStyled = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   svg {
      color: ${theme.colors.secondary};
   }
`;

export default InputContainer;
