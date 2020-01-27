import { auth } from "../../API/api";

const NAME = "appIgnat/profile/NAME"
const isAUTH = "appIgnat/profile/isAUTH"

const initialState = {
    isAuth: true,
    name: ''
};

const profileReducer = (state = initialState, action: any) => {
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

// interface ILogin {
//     type:typeof LOGIN
// }
// type LoginActionsTypes=ILogin

// export const loginAC=()=> {
//     return{type:LOGIN}
// }
export const nameAC = (name: string) => ({ type: NAME, name });
export const isAuthSuccessAC = () => ({ type: isAUTH, value: true });
export const isAuthFailedAC = () => ({ type: isAUTH, value: false });


export default profileReducer;

export const isAuthTC = (token: string | null) => {
    return async (dispatch: any) => {
        try {
            const response = await auth.me(token);
            localStorage.setItem('stringToken', response.data.token)
            dispatch(isAuthFailedAC())
            dispatch(nameAC(response.data.name))
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export const logout = () => {
    return (dispatch: any) => {
        localStorage.setItem('stringToken', '')
        dispatch(isAuthSuccessAC())
    }
}