import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { auth, firestore, user } from "../firebase/firebaseConfig";
import { DisplayModal } from "../types/types";

export type CurrentUser = {
   currentUser: object;
   userInfos: object;
   displayModal: {
      signupModal: boolean;
      loginModal: boolean;
   };
   toggleModals: Function;
   signup: Function;
   login: Function;
};

export const UserContext = createContext<CurrentUser | null>(null);

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
   const [userInfos, setUserInfos] = useState<any>();
   const [loadingData, setLoadingData] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser !== null) {
            const userId = currentUser.uid;
            const docRef = doc(firestore, "users", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
               const userInfos = docSnap.data();
               setUserInfos(userInfos);
            }
         }
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
         value={{
            currentUser,
            userInfos,
            displayModal,
            toggleModals,
            signup,
            login,
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
}
