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
    products: [
        {product: 'car', price: 40000},
        {product: 'computer', price: 200},
        {product: 'car2', price: 1424},
        {product: 'table', price: 42424}
    ]
};

const shopReducer = (state = initialState, action: IAction) => {
    return state;
};

export default shopReducer;

// export const forgot = (email: string) => {
//     return async (dispatch: Dispatch) => {
//         try {
//             dispatch(loadingAC())
//             await auth.forgot(email);
//             dispatch(successAC(true));
//         } catch (error) {
//             dispatch(errorAC(`Email address not found`));
//         };
//         dispatch(loadingAC());
//     }
// }