import React, { useContext } from "react";
import styled from "styled-components";
import RegisterButtonsContainer from "./RegisterButtonsContainer";
import Profile from "../Profile/Profile";
import { theme } from "../../theme/theme";
import { UserContext } from "../../context/UserContext";

function TopbarRightSide(): JSX.Element {
   const { currentUser } = useContext(UserContext);
   return (
      <TopbarRightSideStyled>
         {!currentUser ? <RegisterButtonsContainer /> : <Profile />}
      </TopbarRightSideStyled>
   );
}

const { spacing, dimensions } = theme;

const TopbarRightSideStyled = styled.div`
   width: ${dimensions.pixels.xxl};
   height: ${dimensions.percent.max};
   padding: ${spacing.xs} ${spacing.m};
`;

export default TopbarRightSide;
