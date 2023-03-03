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

const { colors, spacing, borderRadius } = theme;

const PrimaryButtonStyled = styled.button`
   border: none;
   color: ${colors.white};
   background-color: ${colors.purple};
   border-radius: ${borderRadius.rounded};
   border: ${spacing.p2} solid ${colors.purple};
   &:hover {
      font-weight: bold;
      cursor: pointer;
      border: ${spacing.p2} solid ${colors.white};
   }
`;

export default PrimaryButton;
