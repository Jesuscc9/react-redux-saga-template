import { ActionType } from "../../types";
import { AUTH_TYPES } from "./types";

export interface AuthStateType {
  isAuth: boolean;
  isLoading: boolean;
  data: any;
}

const INITIAL_STATE = {
  isAuth: false,
  isLoading: false,
  data: {},
}

export function authReducer(state: AuthStateType = INITIAL_STATE, action: ActionType): AuthStateType {
  const { type, payload } = action;
  
  switch(type) {

    case AUTH_TYPES.LOGIN: {
      return {
        ...state,
        isLoading: true
      }
    }

    case AUTH_TYPES.SET_DATA: {
      return {
        ...state,
        isAuth: true,
        data: payload.data,
        isLoading: false
      }
    }

    case AUTH_TYPES.LOGOUT: {
      return INITIAL_STATE;
    }

    default: 
      return state;
  }
}