import React from "react";
import styled from "styled-components";
import RegisterButtonsContainer from "./RegisterButtonsContainer";
import Profile from "../Profile/Profile";
import { theme } from "../../theme/theme";

type TopBarRightSidePropsType = {
   setDisplayModal: any;
   isConnected: boolean;
   setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

function TopbarRightSide({
   setDisplayModal,
   isConnected,
   setIsConnected,
}: TopBarRightSidePropsType): JSX.Element {
   return (
      <TopbarRightSideStyled>
         {!isConnected ? (
            <RegisterButtonsContainer setDisplayModal={setDisplayModal} />
         ) : (
            <Profile setIsConnected={setIsConnected} />
         )}
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
