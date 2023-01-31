import styled from "styled-components";
import { ContainerType } from "../../types/types";

function PanelContainer({ children }: ContainerType): JSX.Element {
   return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

const PanelContainerStyled = styled.div`
   height: 100%;
   width: 75%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   position: absolute;
   right: 0;
   top: 0;
   z-index: 1;
   overflow: hidden;
   overflow-y: scroll;
   padding: 100px 0;
`;

export default PanelContainer;
