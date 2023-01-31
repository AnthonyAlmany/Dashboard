import styled from "styled-components";
import { theme } from "../theme/theme";
import { ButtonProps } from "../types/types";

function AddButton({ label, onClick }: ButtonProps): JSX.Element {
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
