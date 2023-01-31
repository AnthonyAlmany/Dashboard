import React from "react";
import styled from "styled-components";

function Title(): JSX.Element {
   return <TitleStyled>DASHBOARD</TitleStyled>;
}

const TitleStyled = styled.div`
   margin: 2rem 0;
   max-width: 80%;
`;

export default Title;
