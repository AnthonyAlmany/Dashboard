import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function MainContainer({ children }: ContainerType): JSX.Element {
   return <MainContainerStyled>{children}</MainContainerStyled>;
}

const MainContainerStyled = styled.div`
   height: 90vh;
   width: 90%;
   display: flex;
   align-items: center;
   border-radius: ${theme.borderRadius.rounded};
   background-color: ${theme.colors.primary};
`;

export default MainContainer;
