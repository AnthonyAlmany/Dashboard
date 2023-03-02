import styled from "styled-components";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../theme/theme";

function RegisterButtonsContainer(): JSX.Element {
   const { toggleModals } = useCurrentUser();
   return (
      <RegisterButtonsContainerStyled>
         <PrimaryButton
            disabled={false}
            label={"SIGNUP"}
            onClick={() => toggleModals("signup")}
         />
         <PrimaryButton
            disabled={false}
            label={"LOGIN"}
            onClick={() => toggleModals("login")}
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
