import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

type RegisterButtonsContainerProps = {
   setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

function RegisterButtonsContainer({
   setIsConnected,
}: RegisterButtonsContainerProps): JSX.Element {
   return (
      <RegisterButtonsContainerStyled>
         <PrimaryButton
            label={"SIGNIN"}
            onClick={() => console.log("WELCOME")}
         />
         <PrimaryButton label={"LOGIN"} onClick={() => setIsConnected(true)} />
      </RegisterButtonsContainerStyled>
   );
}

const RegisterButtonsContainerStyled = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: space-around;
   button {
      width: 100px;
      height: 40px;
      font-weight: 700;
      letter-spacing: 2px;
   }
`;

export default RegisterButtonsContainer;
