import * as React from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, user } from "../../firebase/firebaseConfig";
import { setDoc } from "firebase/firestore";
import SignupForm from "./SignupForm";
import { UserType } from "../../types/types";

type SignupProps = {
   signupModal: boolean;
   setDisplayModal: any;
};

function Signup({ signupModal, setDisplayModal }: SignupProps): JSX.Element {
   const navigate = useNavigate();
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
      createUserWithEmailAndPassword(auth, email, password)
         .then((authUser) => {
            setDoc(user(authUser.user.uid), {
               username,
               email,
               favoriteCitiesWeather: [],
               favoriteCryptos: [],
               favoriteMovies: [],
            });
         })
         .then((user) => {
            setSignupDatas(datas);
            setDisplayModal({ signupModal: false });
            navigate("/");
         })
         .catch((error) => {
            setSignupDatas(datas);
         });
   };

   const handleClose = (): void => {
      setDisplayModal({ signupModal: false });
      setSignupDatas(datas);
   };

   return (
      <>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={signupModal ? signupModal : false}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={signupModal}>
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
   border: 5px solid ${theme.colors.secondary};
   border-radius: 20px;
   h2:first-of-type {
      color: ${theme.colors.secondary};
      font-weight: ${theme.fonts.weights.xtraBold};
   }
   p {
      color: ${theme.colors.secondary};
      font-size: 12px;
   }
`;

export default Signup;
