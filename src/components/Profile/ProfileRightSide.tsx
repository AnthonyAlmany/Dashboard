import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

type ProfileRightSideProps = {
   setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileRightSide({
   setIsConnected,
}: ProfileRightSideProps): JSX.Element {
   return (
      <ProfileRightSideStyled>
         <span className="username">Hi, Tom</span>
         <span className="logout" onClick={() => setIsConnected(false)}>
            Logout
         </span>
      </ProfileRightSideStyled>
   );
}

const ProfileRightSideStyled = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: flex-end;
   justify-content: space-evenly;
   color: ${theme.colors.secondary};
   span:first-of-type {
      font-size: ${theme.fonts.size.XL};
      font-weight: ${theme.fonts.weights.xtraBold};
   }
   span:last-of-type {
      text-decoration: underline;
      text-underline-offset: 2px;
      :hover {
         cursor: pointer;
      }
   }
`;

export default ProfileRightSide;
