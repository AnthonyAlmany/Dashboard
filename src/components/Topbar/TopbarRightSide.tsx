import React from "react";
import styled from "styled-components";
import RegisterButtonsContainer from "./RegisterButtonsContainer";
import Profile from "../Profile/Profile";

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
            <RegisterButtonsContainer
               setIsConnected={setIsConnected}
               setDisplayModal={setDisplayModal}
            />
         ) : (
            <Profile setIsConnected={setIsConnected} />
         )}
      </TopbarRightSideStyled>
   );
}

const TopbarRightSideStyled = styled.div`
   width: 300px;
   height: 100%;
   padding: 10px 20px;
`;

export default TopbarRightSide;
