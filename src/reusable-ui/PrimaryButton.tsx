import styled from "styled-components";
import { theme } from "../theme/theme";
import { ButtonProps } from "../types/types";

function PrimaryButton({ label, onClick }: ButtonProps) {
   return <PrimaryButtonStyled onClick={onClick}>{label}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.button`
   height: 50px;
   border: none;
   color: ${theme.colors.primary};
   background-color: ${theme.colors.secondary};
   border-radius: ${theme.borderRadius.rounded};
   &:hover {
      font-weight: bold;
      border: 2px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.primary};
      box-shadow: 3px 3px 5px ${theme.colors.tertiary};
   }
`;

export default PrimaryButton;
