import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function FavoritesContainer({ children }: ContainerType): JSX.Element {
   return <FavoritesContainerStyled>{children}</FavoritesContainerStyled>;
}

const { colors, spacing, dimensions, borderRadius } = theme;

const FavoritesContainerStyled = styled.div`
   background-color: ${colors.secondary};
   border-radius: ${borderRadius.rounded};
   display: flex;
   flex-direction: column;
   h4 {
      color: ${colors.purple};
      font-family: "Source Sans Pro", sans-serif;
      height: ${dimensions.pixels.xs};
      margin: ${spacing.xs} 0 ${spacing.p2};
      margin-left: ${spacing.xs};
   }
   .icon {
      height: ${dimensions.percent.max};
      width: ${dimensions.percent.max};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
         color: ${colors.purple};
         scale: 4;
         &:hover {
            cursor: pointer;
            color: ${colors.white};
         }
      }
   }
`;

export default FavoritesContainer;
