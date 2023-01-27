import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function MainContainer({ children }: ContainerType) {
   return <MainContainerStyled>{children}</MainContainerStyled>;
}

const MainContainerStyled = styled.div`
   height: 90vh;
   width: 90%;
   display: flex;
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
`;

export default MainContainer;
