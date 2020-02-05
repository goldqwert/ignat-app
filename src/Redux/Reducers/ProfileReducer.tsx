import { auth } from "../../API/api";
import { Dispatch } from "redux";

const NAME = "appIgnat/profile/NAME"
const isAUTH = "appIgnat/profile/isAUTH"

interface IState {
    name: string
    isAuth: boolean
}

interface IAction {
    type: typeof NAME | typeof isAUTH
    name: string
    value: boolean
}

const initialState: IState = {
    isAuth: true,
    name: ''
};

const profileReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case NAME:
            return {
                state,
                name: action.name
            };
        case isAUTH:
            return {
                state,
                isAuth: action.value
            };
    }
    return state;
};

export const nameAC = (name: string) => ({ type: NAME, name });
export const isAuthSuccessAC = () => ({ type: isAUTH, value: true });
export const isAuthFailedAC = () => ({ type: isAUTH, value: false });

export const isAuthTC = (token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await auth.me(token);
            localStorage.setItem("stringToken", response.data.token)
            dispatch(isAuthFailedAC())
            dispatch(nameAC(response.data.name))
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch) => {
        localStorage.setItem("stringToken", "")
        dispatch(isAuthSuccessAC())
    }
}

export default profileReducer;
