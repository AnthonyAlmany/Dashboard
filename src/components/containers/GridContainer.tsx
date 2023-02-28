import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function GridContainer({ children }: ContainerType): JSX.Element {
   return <GridContainerStyled>{children}</GridContainerStyled>;
}

const { spacing, dimensions } = theme;

const GridContainerStyled = styled.div`
   display: grid;
   grid-template-columns: ${dimensions.pixels.xxxl} ${dimensions.pixels.large};
   grid-template-rows: ${dimensions.pixels.xlarge} ${dimensions.pixels.xlarge};
   column-gap: ${spacing.xl};
   row-gap: ${spacing.l};
`;

export default GridContainer;
