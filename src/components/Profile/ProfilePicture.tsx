import React from "react";
import styled from "styled-components";

function ProfilePicture(): JSX.Element {
   return (
      <ProfilePictureStyled>
         <div className="profile-picture">
            <img src="/images/noAvatar.png" alt="profile_picture" />
         </div>
      </ProfilePictureStyled>
   );
}

const ProfilePictureStyled = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   overflow: hidden;
   object-fit: cover;
   :hover {
      cursor: pointer;
   }
   img {
      width: 100%;
      height: 100%;
   }
`;

export default ProfilePicture;
