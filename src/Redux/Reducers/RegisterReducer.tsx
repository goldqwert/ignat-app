import { auth } from "../../API/api";
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

const registerReducer = (state = initialState, action: IAction) => {
  return state
}

export default registerReducer;

export const registerRequest = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingAC());
      let response = await auth.register(email, password);
      dispatch(successAC(response.data.success));
    } catch (e) {
      dispatch(errorAC(e.response.data.error));
    }
    dispatch(loadingAC());
    dispatch(successAC(false));
  };
};
