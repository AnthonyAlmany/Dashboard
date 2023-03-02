import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { auth, firestore, user } from "../firebase/firebaseConfig";
import { CryptoType, DisplayModal, MovieType } from "../types/types";

export type CurrentUser = {
   currentUser: any;
   userInfos: UserInfos;
   displayModal: {
      signupModal: boolean;
      loginModal: boolean;
   };
   toggleModals: Function;
   signup: Function;
   login: Function;
};

export type UserInfos = {
   username: string;
   email: string;
   favoriteCitiesWeather: object[];
   favoriteCryptos: CryptoType[];
   favoriteMovies: MovieType[];
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
   const [userInfos, setUserInfos] = useState<any>({});
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
            onSnapshot(doc(firestore, "users", currentUser.uid), (doc) => {
               //console.log("Current data: ", doc.data());
               setUserInfos(doc.data());
            });
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
