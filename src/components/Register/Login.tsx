import React from "react";
import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { BoxStyled, UserType } from "./Signup";
import LoginForm from "./LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

type LoginProps = {
   loginModal: boolean;
   setDisplayModal: any;
};

function Login({ loginModal, setDisplayModal }: LoginProps): JSX.Element {
   const navigate = useNavigate();
   const [loginDatas, setLoginDatas] = React.useState<
      Omit<UserType, "username" | "confirmPassword">
   >({
      email: "",
      password: "",
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginDatas({ ...loginDatas, [event.target.id]: event.target.value });
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      const { email, password } = loginDatas;
      event.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
         .then((user) => {
            setLoginDatas({ email: "", password: "" });
            setDisplayModal({ loginModal: false });
            navigate("/home");
         })
         .catch((error) => {
            setLoginDatas({ email: "", password: "" });
            console.log(error);
         });
   };
   const handleClose = (): void => setDisplayModal({ loginModal: false });
   return (
      <>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={loginModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={loginModal}>
               <BoxStyled>
                  <Typography
                     id="transition-modal-title"
                     variant="h6"
                     component="h2"
                  >
                     Create an account :
                  </Typography>
                  <LoginForm
                     loginDatas={loginDatas}
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

export default Login;
