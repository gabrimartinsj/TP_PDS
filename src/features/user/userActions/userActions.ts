import { Usuario } from "../../../@types/entities/Usuario";
import UserActionTypes from "./userActionTypes";

export const login = (user: Usuario) => ({
  type: UserActionTypes.LOGIN,
  payload: user,
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});
