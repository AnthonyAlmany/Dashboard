import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function MainContainer({ children }: ContainerType): JSX.Element {
   return <MainContainerStyled>{children}</MainContainerStyled>;
}

const MainContainerStyled = styled.div`
   height: 95vh;
   width: 95%;
   position: relative;
   display: flex;
   align-items: center;
   overflow: hidden;
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
`;

export default MainContainer;
