import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import InputContainer from "./InputContainer";
import Label from "./Label";
import Input from "./Input";
import { UserType } from "../../types/types";

type SignupFormProps = {
   signupDatas: UserType;
   handleSubmit: any;
   handleChange: any;
};

function SignupForm({
   signupDatas,
   handleSubmit,
   handleChange,
}: SignupFormProps) {
   return (
      <FormStyled action="submit" onSubmit={handleSubmit}>
         <InputContainer>
            <Label htmlFor={"username"} icon={<AccountCircleIcon />} />
            <Input
               type={"text"}
               id={"username"}
               value={signupDatas.username}
               placeholder={"Username..."}
               required={true}
               onChange={handleChange}
            />
         </InputContainer>
         <InputContainer>
            <Label htmlFor={"email"} icon={<AlternateEmailIcon />} />
            <Input
               type={"email"}
               id={"email"}
               value={signupDatas.email}
               placeholder={"E-mail..."}
               required={true}
               onChange={handleChange}
            />
         </InputContainer>
         <InputContainer>
            <Label htmlFor="password" icon={<LockIcon />} />
            <Input
               type={"password"}
               id={"password"}
               value={signupDatas.password}
               placeholder={"Password..."}
               required={true}
               autoComplete={"off"}
               onChange={handleChange}
            />
         </InputContainer>
         <InputContainer>
            <Label htmlFor="confirm_password" icon={<LockIcon />} />
            <Input
               type={"password"}
               id={"confirmPassword"}
               value={signupDatas.confirmPassword}
               placeholder={"Confirm password..."}
               required={true}
               autoComplete={"off"}
               onChange={handleChange}
            />
         </InputContainer>
         <PrimaryButton
            disabled={
               signupDatas.password !== signupDatas.confirmPassword
                  ? true
                  : false
            }
            label="Validation"
         />
      </FormStyled>
   );
}

export const FormStyled = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 15px;
   width: 80%;
   button {
      width: 50%;
      height: 40px;
      background-color: white;
      color: ${theme.colors.secondary};
      font-weight: bold;
      border: 2px solid ${theme.colors.secondary};
      &:hover {
         background-color: white;
      }
      &:disabled {
         background-color: lightgrey;
         color: darkgrey;
         border-color: darkgrey;
         &:hover {
            box-shadow: none;
         }
      }
   }
`;

export default SignupForm;
