const LOADING = "appIgnat/register/LOADING";
const SUCCESS = "appIgnat/register/REDIRECT";
const ERROR = "appIgnat/register/ERROR";

interface IState {
  loading: boolean
  success: boolean
  error: string
}

interface IAction {
  type: typeof LOADING | typeof ERROR | typeof SUCCESS
  error: string,
  success: boolean
}

const initialState: IState = {
  loading: false,
  success: false,
  error: ''
};

const booleanReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case SUCCESS:
      return {
        ...state,
        success: action.success
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state;
  }
};

export const loadingAC = () => ({ type: LOADING });
export const successAC = (success: boolean) => ({ type: SUCCESS, success });
export const errorAC = (error: string) => ({ type: ERROR, error });

export default booleanReducer;