import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";
import ButtonLabelContainer from "./ButtonLabelContainer";
import { theme } from "../../theme/theme";

type NavButtonProps = {
   label: string;
   icon: any; //Voir pour retirer le any
};

function NavButton({ label, icon }: NavButtonProps): React.ReactElement {
   return (
      <NavButtonStyled
         to={`/${label.toLocaleLowerCase()}`}
         style={{
            ...({ isActive }) => {
               return isActive ? "active" : "";
            },
         }}
      >
         <ButtonContainer>
            {icon}
            <ButtonLabelContainer>{label}</ButtonLabelContainer>
         </ButtonContainer>
      </NavButtonStyled>
   );
}

const NavButtonStyled = styled(NavLink)`
   display: flex;
   align-items: center;
   text-decoration: none;
   color: inherit;
   font-size: 16px;
   color: ${theme.fonts.color.white};
   margin-bottom: 4rem;
   width: 8rem;
   height: 2rem;
   border-radius: 1rem;
   &.active {
      background-color: ${theme.colors.xtraLightSecondary};
      color: ${theme.colors.background.antique};
      border-radius: 12 px;
    }
`;
export default NavButton;
