import { auth } from '../../API/api';

const LOADING = 'appIgnat/register/LOADING';
const UNLOADING = 'appIgnat/register/UNLOADING';
const REDIRECT = 'appIgnat/register/REDIRECT';
const ERROR = 'appIgnat/register/ERROR'

const initialState = {
  loading: false,
  redirect: false,
  error: ''
};

const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case UNLOADING:
      return {
        ...state,
        loading: false
      };
    case REDIRECT:
      return {
        ...state,
        redirect: true
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      }
  }
  return state;
};

// interface ILogin {
//     type: typeof REGISTER
// }
// type LoginActionsTypes = ILogin
export const loadingAC = () => ({ type: LOADING });
export const unloadingAC = () => ({ type: UNLOADING });
export const redirectAC = () => ({ type: REDIRECT });
export const errorRegisterRequest = (error: any) => ({ type: ERROR, error });

export default registerReducer;

export const registerRequest = (email: string, password: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(loadingAC());
      await auth.register(email, password);
      dispatch(redirectAC());
    } catch (error) {
      errorRegisterRequest(error.response.data.error);
    } finally {
      dispatch(unloadingAC());
    }
  };
};
