import { signOut } from "firebase/auth";
import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/firebaseConfig";
import { theme } from "../../theme/theme";

type ProfileLeftSideProps = {
   setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileLeftSide({
   setIsConnected,
}: ProfileLeftSideProps): JSX.Element {
   const navigate = useNavigate();
   const handleLogout: React.EventHandler<SyntheticEvent> = () => {
      signOut(auth)
         .then(() => {
            setTimeout(() => {
               setIsConnected(false);
               navigate("/");
            }, 500);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <ProfileLeftSideStyled>
         <span className="username">Hi, Tom</span>
         <span className="logout" onClick={handleLogout}>
            Logout
         </span>
      </ProfileLeftSideStyled>
   );
}

const ProfileLeftSideStyled = styled.div`
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

export default ProfileLeftSide;
