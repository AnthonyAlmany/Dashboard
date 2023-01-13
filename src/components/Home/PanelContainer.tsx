import styled from "styled-components";
import { ContainerType } from "../../types/types";

function PanelContainer({ children }: ContainerType) {
   return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

const PanelContainerStyled = styled.div`
   height: 100%;
   //width: 75%;
`;

export default PanelContainer;
