import styled from "styled-components";
import { ContainerType } from "../../types/types";

function ButtonLabelContainer({ children }: ContainerType) {
   return <ButtonLabelContainerStyled>{children}</ButtonLabelContainerStyled>;
}

const ButtonLabelContainerStyled = styled.div`
   margin-left: 1rem;
`;

export default ButtonLabelContainer;
