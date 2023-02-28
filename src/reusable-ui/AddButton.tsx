import styled from "styled-components";
import { theme } from "../theme/theme";
import { AddButtonProps } from "../types/types";

function AddButton({ label, onClick }: AddButtonProps): JSX.Element {
   return <AddButtonStyled onClick={onClick}>{label}</AddButtonStyled>;
}

const AddButtonStyled = styled.button`
   width: 25px;
   height: 25px;
   border-radius: ${theme.borderRadius.circle};
   border: none;
   background-color: ${theme.colors.secondary};
   color: white;
   &:hover {
      cursor: pointer;
      font-size: 20px;
   }
`;

export default AddButton;


// Source sans pro 4 6 700, sans serif

