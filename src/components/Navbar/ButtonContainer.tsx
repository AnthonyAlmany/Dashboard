import styled from "styled-components";
import { ContainerType } from "../../types/types";

function ButtonContainer({ children }: ContainerType): JSX.Element {
   return <ButtonContainerStyled>{children}</ButtonContainerStyled>;
}

const ButtonContainerStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

export default ButtonContainer;
