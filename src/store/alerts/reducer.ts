import { ActionType } from "../../types";
import { ALERT_TYPES } from "./types";

type alertType = "info" | "error" | "success" | "warning";

export interface AlertStateType {
  type: alertType
  message: string
}

const INITIAL_STATE: AlertStateType = {
  type: "info",
  message: "",
}

export function alertsReducer(state = INITIAL_STATE, action: ActionType): AlertStateType {
  const { type, payload } = action;
  
  switch(type) {

    case ALERT_TYPES.NEW: {
      return {
        ...state,
        ...payload
      }
    }

    default: 
      return state;
  }
}