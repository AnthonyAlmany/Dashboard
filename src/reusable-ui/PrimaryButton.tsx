import styled from "styled-components";
import { theme } from "../theme/theme";
import { ButtonProps } from "../types/types";

function PrimaryButton({ label, onClick, disabled }: ButtonProps): JSX.Element {
   return (
      <PrimaryButtonStyled onClick={onClick} disabled={disabled}>
         {label}
      </PrimaryButtonStyled>
   );
}

const PrimaryButtonStyled = styled.button`
   height: 30px;
   border: none;
   font-family: 'Source Sans Pro', sans-serif;
   color: ${theme.colors.white};
   background-color: ${theme.colors.purple};
   border-radius: ${theme.borderRadius.rounded};
   &:hover {
      font-weight: bold;
      cursor: pointer;
   }
`;

export default PrimaryButton;
