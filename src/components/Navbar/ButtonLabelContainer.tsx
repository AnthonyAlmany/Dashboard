import styled from "styled-components";
import { ContainerType } from "../../types/types";

function ButtonLabelContainer({ children }: ContainerType): JSX.Element {
   return <ButtonLabelContainerStyled>{children}</ButtonLabelContainerStyled>;
}

const ButtonLabelContainerStyled = styled.div`
   margin-top: 3px;
   margin-left: 1rem;
`;

export default ButtonLabelContainer;
