import { CurrentUser, UserContext } from "./../context/UserContext";
import { useContext } from "react";

export const useCurrentUser = (): CurrentUser => {
   const currentUser: CurrentUser | null = useContext(UserContext);
   if (!currentUser) {
      throw new Error(
         "useCurrentUser has to be used within <UserContext.Provider>"
      );
   }

   return currentUser;
};
