import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function ButtonContainer({ children }: ContainerType) {
   return <ButtonCoantainerStyled>{children}</ButtonCoantainerStyled>;
}

const ButtonCoantainerStyled = styled.div`
   display: flex;
   align-items: center;
   height: 2rem;
   width: 8rem;
   border-radius: 1rem;
   padding-left: 12px;
`;

export default ButtonContainer;
