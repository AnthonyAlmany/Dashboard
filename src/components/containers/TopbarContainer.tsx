import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function TopbarContainer({ children }: ContainerType): JSX.Element {
   return <TopbarContainerStyled>{children}</TopbarContainerStyled>;
}

const { spacing, dimensions } = theme;

const TopbarContainerStyled = styled.div`
   position: absolute;
   top: ${spacing.null};
   right: ${spacing.null};
   z-index: 2;
   width: ${dimensions.percent.max};
   height: ${dimensions.pixels.medium};
   display: flex;
   align-items: center;
   justify-content: end;
   background: rgba(255, 255, 255, 0.5);
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
`;

export default TopbarContainer;
