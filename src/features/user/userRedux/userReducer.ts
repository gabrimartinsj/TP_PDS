import { AnyAction } from "redux";
import { Usuario } from "../../../@types/entities/Usuario";
import UserActionTypes from "../userActions/userActionTypes";

type userTypes = {
  isFetching: boolean;
  error: string | null;
  user: Usuario | null;
};

const userInitialState: userTypes = {
  isFetching: false,
  error: null,
  user: {
    id: 0,
    nome: "Renato Diniz de Souza",
    email: "renatodiniz@gmail.com",
  },
};

const userReducer = (state = userInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: payload,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
