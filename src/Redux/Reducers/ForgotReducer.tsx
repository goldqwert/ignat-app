import { auth } from "../../API/api";

const LOADING = "appIgnat/forgot/LOADING"
const ERROR = "appIgnat/forgot/ERROR"
const SUCCESS = "appIgnat/forgot/SUCCESS"

const initialState = {
    loading: false,
    success: false,
    error: ''
};

const forgotReducer = (state = initialState, action: any) => {
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
            debugger
            return {
                state,
                success: true
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
export const errorAC = (error: any) => ({ type: ERROR, error });
export const successAC = () => ({ type: SUCCESS });


export default forgotReducer;

export const forgot = (email: string) => {
    return async (dispatch: any) => {
        try {
            debugger
            dispatch(loadingAC())
            await auth.forgot(email);
            dispatch(successAC());
        } catch (error) {
            dispatch(errorAC(`Email address not found`));
        };
        dispatch(loadingAC());
    }
}