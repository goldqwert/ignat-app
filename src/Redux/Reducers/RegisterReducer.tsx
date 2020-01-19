import { auth } from '../../API/api';

const REGISTER = 'appIgnat/register/REGISTER'
const LOADING = 'appIgnat/register/LOADING'
const UNLOADING = 'appIgnat/register/UNLOADING'
const REDIRECT = 'appIgnat/register/REDIRECT'

const initialState = {
    loading: false,
    redirect: false
};

const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case UNLOADING:
            return {
                ...state,
                loading: false
            }
        case REDIRECT:
            return {
                ...state,
                redirect: true
            }
    }
    return state
};

// interface ILogin {
//     type: typeof REGISTER
// }
// type LoginActionsTypes = ILogin

export const loginAC = () => {
    return { type: REGISTER }
}

export const loadingAC = () => ({ type: LOADING })
export const unloadingAC = () => ({ type: UNLOADING })
export const redirectAC = () => ({ type: REDIRECT })

export default registerReducer

export const register = (email: string, password: number) => {
    return async (dispatch: any) => {
        try {
            dispatch(loadingAC())
            await auth.register(email, password)
            dispatch(redirectAC())
        } catch (error) {
            alert(error.response.data.error);
        } finally {
            dispatch(unloadingAC())
        }
    }
}
