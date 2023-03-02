import { CurrentUser, UserContext } from "./../context/UserContext";
import { useContext } from "react";

export const useCurrentUser = (): CurrentUser => {
   const currentUser = useContext(UserContext);
   if (!currentUser) {
      throw new Error(
         "useCurrentUser has to be used within <UserContext.Provider>"
      );
   }

   return currentUser;
};
