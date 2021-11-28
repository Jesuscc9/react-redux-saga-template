import { AUTH_TYPES } from "./types";

function login(username: string, password: string) {
  return {
    type: AUTH_TYPES.LOGIN,
    payload: { username, password }
  }
}

function logout() {
  return {
    type: AUTH_TYPES.LOGOUT
  };
}

function setData(data: any) {
  return {
    type: AUTH_TYPES.SET_DATA,
    payload: { data }
  }
}

function me() {
  return {
    type: AUTH_TYPES.ME
  }
}

export const authActions = {
  login,
  setData,
  logout,
  me
}