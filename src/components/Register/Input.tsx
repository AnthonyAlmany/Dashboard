import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

type InputType = {
   type: string;
   id: string;
   value: string;
   placeholder: string;
   required: boolean;
   autoComplete?: string;
   onChange: any;
};

function Input({
   type,
   id,
   value,
   placeholder,
   required,
   autoComplete,
   onChange,
}: InputType) {
   return (
      <InputStyled
         type={type}
         id={id}
         value={value}
         placeholder={placeholder}
         required={required}
         autoComplete={autoComplete}
         onChange={onChange}
      />
   );
}

const InputStyled = styled.input`
   height: 40px;
   border-radius: 10px;
   border: 2px solid ${theme.colors.secondary};
   box-shadow: inset 0px 0px 8px 2px ${theme.colors.secondary};
   padding-left: 10px;
   color: ${theme.colors.secondary};
   font-size: medium;
   font-weight: bold;
   outline: none;
   ::placeholder {
      opacity: 0.4;
      font-style: italic;
   }
   &:focus {
      border: 3px solid lightgrey;
      box-shadow: inset 0 0 8px 0 grey;
   }
`;

export default Input;
