import { useContext } from "react";
import { RootStateContext } from "./provider";

function useRootStateContext() {
  const context = useContext(RootStateContext);
  return context;
}

export default useRootStateContext;
