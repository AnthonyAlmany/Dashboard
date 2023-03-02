import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import ProfileLeftSide from "./ProfileLeftSide";

function Profile(): JSX.Element {
   return (
      <ProfileStyled>
         <ProfileLeftSide />
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
