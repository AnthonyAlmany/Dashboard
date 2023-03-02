import styled from "styled-components";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../theme/theme";

function DefaultHome() {
   const { toggleModals } = useCurrentUser();
   return (
      <DefaultHomeStyled>
         <h1>Welcome</h1>
         <PrimaryButton
            label="Create an account"
            disabled={false}
            onClick={() => toggleModals("signup")}
         />
         <h5>
            Already have an account{" "}
            <span onClick={() => toggleModals("login")}>LOGIN</span>
         </h5>
      </DefaultHomeStyled>
   );
}

const { colors, dimensions, spacing } = theme;

const DefaultHomeStyled = styled.div`
   height: ${dimensions.percent.max};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   color: ${colors.white};
   button {
      height: ${dimensions.pixels.small};
      width: ${spacing.xxxl};
   }
   span {
      text-decoration: underline;
      &:hover {
         cursor: pointer;
         color: ${colors.purple};
      }
   }
`;

export default DefaultHome;
