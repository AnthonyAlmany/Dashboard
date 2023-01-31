import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import ProfileRightSide from "./ProfileRightSide";

function Profile({ setIsConnected }: any): JSX.Element {
   return (
      <ProfileStyled>
         <ProfileRightSide setIsConnected={setIsConnected} />
         <ProfilePicture />
      </ProfileStyled>
   );
}

const ProfileStyled = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   column-gap: 20px;
`;

export default Profile;
