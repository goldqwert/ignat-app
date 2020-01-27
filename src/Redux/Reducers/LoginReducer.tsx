import { auth } from "../../API/api";
import { isAuthFailedAC } from "./ProfileReducer";

const LOADING = "appIgnat/login/LOADING"
const ERROR = "appIgnat/login/ERROR"
const SUCCESS = "appIgnat/login/SUCCESS"


const initialState = {
  loading: false,
  success: false,
  error: ''
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        state,
        loading: !state.loading
      };
    case ERROR:
      return {
        state,
        error: action.error
      };
    case SUCCESS:
      return {
        state,
        success: action.success
      }
  }
  return state;
};

// interface ILogin {
//     type:typeof LOGIN
// }
// type LoginActionsTypes=ILogin

// export const loginAC=()=> {
//     return{type:LOGIN}
// }
export const loadingAC = () => ({ type: LOADING });
export const successAC = (success: boolean) => ({ type: SUCCESS, success });
export const errorAC = (error: any) => ({ type: ERROR, error });

export default loginReducer;

export const login = (login: string, password: string, rememberMe: boolean) => {
  return async (dispatch: any) => {
    try {
      dispatch(loadingAC())
      let response = await auth.login(login, password, rememberMe);
      if (response.data.rememberMe) {
        localStorage.setItem('stringToken', response.data.token)
        dispatch(successAC(true));
      }
      dispatch(isAuthFailedAC())
      // dispatch(isAuthSuccessAC())
    } catch (e) {
      dispatch(errorAC(e.response.data));
    };
    dispatch(loadingAC());
  }
}