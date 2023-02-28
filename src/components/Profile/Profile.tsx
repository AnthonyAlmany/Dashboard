import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import ProfileLeftSide from "./ProfileLeftSide";

type ProfilePropsType = {
   setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

function Profile({ setIsConnected }: ProfilePropsType): JSX.Element {
   return (
      <ProfileStyled>
         <ProfileLeftSide setIsConnected={setIsConnected} />
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
