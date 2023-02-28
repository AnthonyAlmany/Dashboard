import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

function Title(): JSX.Element {
   return <TitleStyled>DASHBOARD</TitleStyled>;
}

const TitleStyled = styled.div`
   margin: 2rem 0 6rem 0;
   max-width: 80%;
   font-size: 24px;
   font-weight: 600;
   color: ${theme.colors.white};
`;

export default Title;
