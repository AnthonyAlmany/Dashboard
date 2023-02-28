import React from "react";
import Input from "./Input";
import InputContainer from "./InputContainer";
import Label from "./Label";
import { FormStyled } from "./SignupForm";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

type LoginFormProps = {
   loginDatas: any;
   handleSubmit: any;
   handleChange: any;
};

function LoginForm({ loginDatas, handleSubmit, handleChange }: LoginFormProps) {
   return (
      <FormStyled action="submit" onSubmit={handleSubmit}>
         <InputContainer>
            <Label htmlFor={"email"} icon={<AlternateEmailIcon />} />
            <Input
               type={"email"}
               id={"email"}
               value={loginDatas.email}
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
               value={loginDatas.password}
               placeholder={"Password..."}
               required={true}
               autoComplete={"off"}
               onChange={handleChange}
            />
         </InputContainer>
         <PrimaryButton
            disabled={!loginDatas.email || !loginDatas.password ? true : false}
            label="Validation"
         />
      </FormStyled>
   );
}

export default LoginForm;
