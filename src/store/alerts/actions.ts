import { ALERT_TYPES } from "./types";

interface alertProps {
  type: string,
  message: string,
}

function newAlert({ type, message }: alertProps) {
  return {
    type: ALERT_TYPES.NEW,
    payload: { type, message}
  }
}

export const alertActions = {
  newAlert,
}