import { auth } from "../../API/api";
import { Dispatch } from "redux";
import { loadingAC, successAC, errorAC } from "./BooleanReducer";

// const LOADING = "appIgnat/forgot/LOADING"
// const ERROR = "appIgnat/forgot/ERROR"
// const SUCCESS = "appIgnat/forgot/SUCCESS"
interface IState {
    // loading: boolean
    // success: boolean
    // error: string
}
interface IAction {
    // type: typeof LOADING | typeof ERROR | typeof SUCCESS
    // error: string
}
const initialState: IState = {
    // loading: false,
    // success: false,
    // error: ''
};

const forgotReducer = (state = initialState, action: IAction) => {
    return state;
};

export default forgotReducer;

export const forgot = (email: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadingAC())
            await auth.forgot(email);
            dispatch(successAC(true));
        } catch (error) {
            dispatch(errorAC(`Email address not found`));
        };
        dispatch(loadingAC());
    }
}