import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function MainContainer({ children }: ContainerType) {
   return <MainContainerStyled>{children}</MainContainerStyled>;
}

const MainContainerStyled = styled.div`
   height: 60rem;
   width: 80rem;
   
   display: flex;
   align-items: center;
   border-radius: ${theme.borderRadius.rounded};
   background-color: ${theme.colors.primary};
`;

export default MainContainer;
