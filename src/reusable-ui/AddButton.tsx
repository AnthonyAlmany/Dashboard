import styled from "styled-components";
import { theme } from "../theme/theme";
import { AddButtonProps } from "../types/types";

function AddButton({ label, onClick }: AddButtonProps): JSX.Element {
   return <AddButtonStyled onClick={onClick}>{label}</AddButtonStyled>;
}

const { colors, dimensions, fonts, borderRadius } = theme;

const AddButtonStyled = styled.button`
   width: ${dimensions.pixels.xs};
   height: ${dimensions.pixels.xs};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: ${borderRadius.circle};
   border: none;
   background-color: ${colors.secondary};
   color: ${colors.white};
   &:hover {
      cursor: pointer;
      font-size: ${fonts.size.XXL};
   }
`;

export default AddButton;
