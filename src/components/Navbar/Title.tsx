import React from "react";
import styled from "styled-components";

function Title() {
   return <TitleStyled>DASHBOARD</TitleStyled>;
}

const TitleStyled = styled.div`
   margin: 4rem 0;
   max-width: 80%;
`;

export default Title;
