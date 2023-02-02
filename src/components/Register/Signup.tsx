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
import Form from "./Form";

type SignupProps = {
   signupModal: boolean;
   setDisplayModal: any;
};

export type UserType = {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
};

function Signup({ signupModal, setDisplayModal }: SignupProps) {
   const navigate = useNavigate();
   const [signupDatas, setSignupDatas] = React.useState<UserType>({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);

      setSignupDatas({
         ...signupDatas,
         [event.target.id]: event.target.value,
      });
   };

   const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const { email, password, username } = signupDatas;
      createUserWithEmailAndPassword(auth, email, password)
         .then((authUser) => {
            return setDoc(user(authUser.user.uid), {
               username: username,
               email: email,
            });
         })
         .then((user) => {
            setSignupDatas({ ...signupDatas });
            navigate("/");
         })
         .catch((error) => {
            setSignupDatas({ ...signupDatas });
         });
   };

   const handleClose = (): void => setDisplayModal({ signupModal: false });

   return (
      <>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={signupModal}
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
                  <Form
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

const BoxStyled = styled(Box)`
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
