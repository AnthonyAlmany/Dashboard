import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { DisplayModal } from "../App";
import { auth, user } from "../firebase/firebaseConfig";

export const UserContext = createContext<any>({});

export function UserContextProvider(props: PropsWithChildren) {
   const signup = (username: string, email: string, password: string) =>
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
         .catch((error) => {
            console.log(error);
         });

   const login = (email: string, password: string) =>
      signInWithEmailAndPassword(auth, email, password);

   const [currentUser, setCurrentUser] = useState<any>();
   const [loadingData, setLoadingData] = useState(true);
   //console.log("MAJ", currentUser);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setCurrentUser(currentUser);
         setLoadingData(false);
      });

      return unsubscribe;
   }, []);

   const [displayModal, setDisplayModal] = useState<DisplayModal>({
      signupModal: false,
      loginModal: false,
   });

   const toggleModals = (modal: string) => {
      if (modal === "login") {
         setDisplayModal({
            signupModal: false,
            loginModal: true,
         });
      }
      if (modal === "signup") {
         setDisplayModal({
            signupModal: true,
            loginModal: false,
         });
      }
      if (modal === "close") {
         setDisplayModal({
            signupModal: false,
            loginModal: false,
         });
      }
   };

   return (
      <UserContext.Provider
         value={{ currentUser, displayModal, toggleModals, signup, login }}
      >
         {props.children}
      </UserContext.Provider>
   );
}
