import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../theme/theme";

type RegisterButtonsContainerProps = {
   setDisplayModal: any;
};

function RegisterButtonsContainer({
   setDisplayModal,
}: RegisterButtonsContainerProps): JSX.Element {
   return (
      <RegisterButtonsContainerStyled>
         <PrimaryButton
            disabled={false}
            label={"SIGNUP"}
            onClick={() =>
               setDisplayModal({ signupModal: true, loginModal: false })
            }
         />
         <PrimaryButton
            disabled={false}
            label={"LOGIN"}
            onClick={() => {
               setDisplayModal({ loginModal: true, signupModal: false });
            }}
         />
      </RegisterButtonsContainerStyled>
   );
}

const { spacing, dimensions, fonts } = theme;

const RegisterButtonsContainerStyled = styled.div`
   display: flex;
   width: ${dimensions.percent.max};
   height: ${dimensions.percent.max};
   align-items: center;
   justify-content: space-around;
   button {
      width: ${dimensions.pixels.medium};
      height: ${dimensions.pixels.small};
      font-weight: ${fonts.weights.bold};
      letter-spacing: ${spacing.p2};
   }
`;

export default RegisterButtonsContainer;
