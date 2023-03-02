import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import SignupForm from "./SignupForm";
import { UserType } from "../../types/types";
import { UserContext } from "../../context/UserContext";

function Signup(): JSX.Element {
   const { signup, displayModal, toggleModals } = React.useContext(UserContext);

   const datas: UserType = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   };
   const [signupDatas, setSignupDatas] = React.useState<UserType>(datas);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSignupDatas({
         ...signupDatas,
         [event.target.id]: event.target.value,
      });
   };

   const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): any => {
      event.preventDefault();
      const { email, password, username } = signupDatas;
      signup(username, email, password);
      toggleModals("close");
   };

   const handleClose = (): void => {
      toggleModals("close");
      setSignupDatas(datas);
   };

   return (
      <>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={displayModal?.signupModal ? displayModal.signupModal : false}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={displayModal?.signupModal}>
               <BoxStyled>
                  <Typography
                     id="transition-modal-title"
                     variant="h6"
                     component="h2"
                  >
                     Create an account :
                  </Typography>
                  <SignupForm
                     signupDatas={signupDatas}
                     handleSubmit={handleSubmit}
                     handleChange={handleChange}
                  />

                  <Typography id="transition-modal-description" component="p">
                     * All are required.
                  </Typography>
               </BoxStyled>
            </Fade>
         </Modal>
      </>
   );
}

export const BoxStyled = styled(Box)`
   position: absolute;
   display: flex;
   flex-direction: column;
   row-gap: 15px;
   align-items: center;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 350px;
   padding: 25px 0;
   background-color: ${theme.colors.primary};
   border: 5px solid ${theme.colors.purple};
   border-radius: 20px;
   h2:first-of-type {
      color: ${theme.colors.purple};
      font-weight: ${theme.fonts.weights.xtraBold};
   }
   p {
      color: ${theme.colors.purple};
      font-size: 12px;
   }
`;

export default Signup;
