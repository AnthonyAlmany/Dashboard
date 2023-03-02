import styled from "styled-components";
import RegisterButtonsContainer from "./RegisterButtonsContainer";
import Profile from "../Profile/Profile";
import { theme } from "../../theme/theme";
import { useCurrentUser } from "../../hooks/useCurrentUser";

function TopbarRightSide(): JSX.Element {
   const { currentUser } = useCurrentUser();
   return (
      <TopbarRightSideStyled>
         {!currentUser ? <RegisterButtonsContainer /> : <Profile />}
      </TopbarRightSideStyled>
   );
}

const { spacing, dimensions } = theme;

const TopbarRightSideStyled = styled.div`
   width: ${dimensions.pixels.xxl};
   height: ${dimensions.percent.max};
   padding: ${spacing.xs} ${spacing.m};
`;

export default TopbarRightSide;
