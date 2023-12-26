import { useContext } from "react";
import { GlobalContext } from "../context/GlobabContext";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() must b3 in the GlobalContextProvider()",
    );
  }
  return context;
}
