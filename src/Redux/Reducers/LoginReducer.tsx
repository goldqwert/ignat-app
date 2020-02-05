import { auth } from "../../API/api";
import { isAuthFailedAC } from "./ProfileReducer";
import { Dispatch } from "redux";
import { loadingAC, successAC, errorAC } from "./BooleanReducer";

interface IState {
  // loading: boolean
  // success: boolean
  // error: string
}

interface IAction {
  // type: typeof LOADING | typeof ERROR | typeof SUCCESS
  // error: string,
  // success: boolean
}

const initialState: IState = {
  // loading: false,
  // success: false,
  // error: ''
};

const loginReducer = (state = initialState, action: IAction) => {
  return state;
};

export default loginReducer;

export const login = (login: string, password: string, rememberMe: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingAC())
      let response = await auth.login(login, password, rememberMe);
      if (response.data.rememberMe) {
        localStorage.setItem("stringToken", response.data.token)
        dispatch(successAC(true));
      }
      dispatch(isAuthFailedAC())
    } catch (e) {
      dispatch(errorAC(e.response.data.error));
    };
    dispatch(loadingAC())
    dispatch(successAC(false));
  }
}