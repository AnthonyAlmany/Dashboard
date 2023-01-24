import styled from "styled-components";
import { ContainerType } from "../../types/types";

function PanelContainer({ children }: ContainerType) {
   return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

const PanelContainerStyled = styled.div`
   height: 100%;
   width: 75%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   position: relative;
   overflow: hidden;
   overflow-y: scroll;
`;

export default PanelContainer;
