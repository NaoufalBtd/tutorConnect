import { useStepContext } from "@providers/step-provider";
import { useEffect } from "react";


const useStepActions = (nextAction: () => void) => {
  const {registerNextAction} = useStepContext();

  useEffect(() => {
    registerNextAction(nextAction);
  }, [nextAction, registerNextAction]);

}

export default useStepActions;