import { signOut } from "firebase/auth";
import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/firebaseConfig";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { theme } from "../../theme/theme";

function ProfileLeftSide(): JSX.Element {
   const { userInfos } = useCurrentUser();

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
         <span className="username" data-hover="Edit profile">
            Hi, {userInfos.username}
         </span>
         <TooltipBox>Edit profile</TooltipBox>
         <span className="logout" onClick={logout}>
            Logout
         </span>
      </ProfileLeftSideStyled>
   );
}

const { colors, spacing, dimensions, fonts } = theme;

const TooltipBox = styled.div`
   display: none;
   position: absolute;
   z-index: 2;
   top: ${spacing.l};
   color: ${colors.white};
   font-size: ${fonts.size.S};
`;

const ProfileLeftSideStyled = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   height: ${dimensions.percent.max};
   align-items: flex-end;
   justify-content: space-between;
   color: ${colors.secondary};

   & span:first-of-type:hover + ${TooltipBox} {
      display: unset;
   }

   span:first-of-type {
      font-size: ${fonts.size.XL};
      font-weight: ${fonts.weights.xtraBold};
      &:hover {
         cursor: pointer;
         color: ${colors.purple};
      }
   }

   span:last-of-type {
      text-decoration: underline;
      text-underline-offset: ${spacing.p2};
      &:hover {
         cursor: pointer;
      }
   }
`;

export default ProfileLeftSide;
