import styled from "styled-components";
import { ContainerType } from "../../types/types";
import { theme } from "../../theme/theme";

function PanelContainer({ children }: ContainerType) {
   return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

const PanelContainerStyled = styled.div`
   height: 98%;
   width: 84%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   position: absolute;
   right: 0;
   top: 0;
   z-index: 1;
   overflow: hidden;
   // overflow-y: scroll;

   &::-webkit-scrollbar {
      background: ${theme.colors.xtraLightSecondary};
      border-radius: 2rem;
   }

   &::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 2rem;
   }
   padding: 100px 0;
`;

export default PanelContainer;
