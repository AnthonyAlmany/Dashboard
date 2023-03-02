import { ChangeEvent, FormEvent, useState } from "react";
import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { BoxStyled } from "./Signup";
import LoginForm from "./LoginForm";
import { UserType } from "../../types/types";
import { useCurrentUser } from "../../hooks/useCurrentUser";

function Login(): JSX.Element {
   const { login, displayModal, toggleModals } = useCurrentUser();
   const datas: Omit<UserType, "username" | "confirmPassword"> = {
      email: "",
      password: "",
   };
   const [loginDatas, setLoginDatas] =
      useState<Omit<UserType, "username" | "confirmPassword">>(datas);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setLoginDatas({ ...loginDatas, [event.target.id]: event.target.value });
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      const { email, password } = loginDatas;
      event.preventDefault();
      login(email, password);
      toggleModals("close");
   };
   const handleClose = (): void => toggleModals("close");
   return (
      <>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={displayModal?.loginModal ? displayModal.loginModal : false}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={displayModal?.loginModal}>
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
