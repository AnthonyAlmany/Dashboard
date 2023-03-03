import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import {
   arrayUnion,
   doc,
   getDoc,
   onSnapshot,
   setDoc,
   updateDoc,
} from "firebase/firestore";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { auth, firestore, user } from "../firebase/firebaseConfig";
import {
   CryptoType,
   DisplayModal,
   MovieType,
   WeatherType,
} from "../types/types";

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
   weatherHandle: Function;
   handleMovie: Function;
   handleCrypto: Function;
   deleteMovie: Function;
   deleteCoin: Function;
};

export type UserInfos = {
   username: string;
   email: string;
   favoriteCitiesWeather: WeatherType[];
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
               setUserInfos(doc.data());
            });
         }
         setCurrentUser(currentUser);
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

   const weatherHandle = async (value: WeatherType) => {
      const cityRef = doc(firestore, "users", currentUser.uid);
      await updateDoc(cityRef, {
         favoriteCitiesWeather: [value],
      });
   };

   const handleMovie = async (value: MovieType) => {
      const movieRef = doc(firestore, "users", currentUser.uid);
      await updateDoc(movieRef, {
         favoriteMovies: arrayUnion(value),
      });
   };
   const handleCrypto = async (value: CryptoType) => {
      const cryptoRef = doc(firestore, "users", currentUser.uid);
      await updateDoc(cryptoRef, {
         favoriteCryptos: arrayUnion(value),
      });
   };
   const deleteMovie = async (arg: number) => {
      const movieRef = doc(firestore, "users", currentUser.uid);
      const newDatas = userInfos.favoriteMovies.filter(
         (movie: MovieType) => movie.id !== arg
      );
      await updateDoc(movieRef, {
         favoriteMovies: newDatas,
      });
   };

   const deleteCoin = async (arg: string) => {
      const cryptoRef = doc(firestore, "users", currentUser.uid);
      const newDatas = userInfos.favoriteCryptos.filter(
         (coin: CryptoType) => coin.id !== arg
      );
      await updateDoc(cryptoRef, {
         favoriteCryptos: newDatas,
      });
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
            weatherHandle,
            handleMovie,
            handleCrypto,
            deleteMovie,
            deleteCoin,
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
}
