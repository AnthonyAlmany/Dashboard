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
   position: relative;
   overflow: hidden;
   overflow-y: scroll;

   &::-webkit-scrollbar {
    background: ${theme.colors.xtraLightSecondary};
    border-radius: 2rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 2rem;
    }
     
      
`;

export default PanelContainer;
