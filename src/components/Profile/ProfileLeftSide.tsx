import { signOut } from "firebase/auth";
import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/firebaseConfig";
import { theme } from "../../theme/theme";

function ProfileLeftSide(): JSX.Element {
   const logout: React.EventHandler<SyntheticEvent> = async () => {
      try {
         await signOut(auth);
      } catch {
         alert(
            "For some reasons we can't deconnect, please check your internet connexion and retry."
         );
      }
   };
   return (
      <ProfileLeftSideStyled>
         <span className="username">Hi, Tom</span>
         <span className="logout" onClick={logout}>
            Logout
         </span>
      </ProfileLeftSideStyled>
   );
}

const ProfileLeftSideStyled = styled.div`
   display: flex;
   flex-direction: column;
   height: ${theme.dimensions.percent.max};
   align-items: flex-end;
   justify-content: space-evenly;
   color: ${theme.colors.secondary};
   span:first-of-type {
      font-size: ${theme.fonts.size.XL};
      font-weight: ${theme.fonts.weights.xtraBold};
   }
   span:last-of-type {
      text-decoration: underline;
      text-underline-offset: ${theme.spacing.p2};
      :hover {
         cursor: pointer;
      }
   }
`;

export default ProfileLeftSide;
