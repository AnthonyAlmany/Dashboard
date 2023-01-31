import React from "react";
import styled from "styled-components";
import { ContainerType } from "../../types/types";

function TopbarContainer({ children }: ContainerType) {
   return <TopbarContainerStyled>{children}</TopbarContainerStyled>;
}

const TopbarContainerStyled = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   z-index: 2;
   width: 100%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: end;
   background: rgba(255, 255, 255, 0.6);
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(4px);
`;

export default TopbarContainer;
