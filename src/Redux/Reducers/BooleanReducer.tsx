import { auth } from "../../API/api";

const LOADING = "appIgnat/register/LOADING";
const REDIRECT = "appIgnat/register/REDIRECT";
const ERROR = "appIgnat/register/ERROR";

const initialState = {
  loading: false,
  success: false,
  error: ''
};

// interface IErrorRegistrationDataAction {
//   type: typeof ERROR_REGISTRATION_DATA;
//   error: string
// }

// interface IRegistrationRequestSendAction {
//   type: typeof REGISTRATION_REQUEST,
// }

// interface IAuthSuccessAction {
//   type: typeof AUTH_SUCCESS,
//   success: boolean
// }

// interface IInitialStateRegistration {
//   error: string,
//   isLoading: boolean,
//   success: boolean
// }

const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case REDIRECT:
      return {
        ...state,
        success: true
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state;
  }
};

// interface ILogin {
//     type: typeof REGISTER
// }
// type LoginActionsTypes = ILogin
export const loadingAC = () => ({ type: LOADING });
export const success = () => ({ type: REDIRECT });
export const errorRegisterRequest = (error: any) => ({ type: ERROR, error });

export default registerReducer;

export const registerRequest = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(loadingAC());
      await auth.register(email, password);
      dispatch(success());
    } catch (error) {
      errorRegisterRequest(error.response.data.error);
    }
    dispatch(loadingAC());
  };
};
