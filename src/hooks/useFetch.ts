import { useEffect, useReducer } from "react";

export type State = {
   status: string;
   isLoading: boolean;
   data: any;
   error: any;
};
type Action =
   | { type: "fetching" }
   | { type: "done"; payload: any }
   | { type: "fail"; error: any };

const initialState = {
   status: "",
   isLoading: false,
   data: null,
   error: null,
};

const reducer = (state: State, action: Action): State => {
   switch (action.type) {
      case "fetching":
         return {
            status: "fetching",
            isLoading: true,
            data: null,
            error: null,
         };
      case "done":
         return {
            status: "done",
            isLoading: false,
            data: action.payload,
            error: null,
         };
      case "fail":
         return {
            status: "fail",
            isLoading: false,
            data: null,
            error: action.error,
         };
      default:
         throw new Error("Action non supportée");
   }
};

export function useFetch(fetch: any) {
   const [state, dispatch] = useReducer<
      (state: State, action: Action) => State
   >(reducer, initialState);
   useEffect(() => {
      dispatch({ type: "fetching" });
      fetch()
         .then((data: any) => {
            dispatch({ type: "done", payload: data });
         })
         .catch((error: any) => dispatch({ type: "fail", error }));
   }, [fetch]);

   return state;
}
