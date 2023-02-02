import React from "react";
import styled from "styled-components";
import RegisterButtonsContainer from "./RegisterButtonsContainer";
import Profile from "../Profile/Profile";

function TopbarRightSide({ setDisplayModal }: any): JSX.Element {
   const [isConnected, setIsConnected] = React.useState<boolean>(false);

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
