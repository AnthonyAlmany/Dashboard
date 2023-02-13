import styled from "styled-components";
import { theme } from "../../theme/theme";
import { ContainerType } from "../../types/types";

function NavbarContainer({ children }: ContainerType) {
   return <NavcontainerStyled>{children}</NavcontainerStyled>;
}

const NavcontainerStyled = styled.div`
   height: 100%;
   width: 18rem;
   min-width: 200px;
   background-color: ${theme.colors.secondary};
   border-top-left-radius: ${theme.borderRadius.rounded};
   border-bottom-left-radius: ${theme.borderRadius.rounded};
`;

export default NavbarContainer;
