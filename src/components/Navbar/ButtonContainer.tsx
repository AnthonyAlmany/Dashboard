import styled from "styled-components";
import { ContainerType } from "../../types/types";

<<<<<<< HEAD
function ButtonContainer({ children }: ContainerType) {
   return <ButtonContainerStyled>{children}</ButtonContainerStyled>;
=======
function ButtonContainer({ children }: ContainerType): JSX.Element {
   return <ButtonCoantainerStyled>{children}</ButtonCoantainerStyled>;
>>>>>>> Firebase
}

const ButtonContainerStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

export default ButtonContainer;
