import { users } from "../../API/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../store";

const SET_USERS = "appIgnat/shop/SET_USERS"
// const BUY_PRODUCT_IN_BASKET = "appIgnat/shop/BUY_PRODUCT_IN_BASKET"
// const ADD_PRODUCT_IN_BASKET = "appIgnat/shop/ADD_PRODUCT_IN_BASKET"
// const DELETE_PRODUCTS_IN_BASKET = "appIgnat/shop/DELETE_PRODUCTS_IN_BASKET"
// const CHANGE_VALUE_CHECKBOX = "appIgnat/shop/CHANGE_VALUE_CHECKBOX"
interface IState {
    users: IUsers[]
}
interface IUsers {
    id: string
    email: string
}

export interface INewProduct {
    product: IProduct
}

export interface IProduct {
    id?: string,
    productName: string,
    price: number
}

// interface IChangeValueProductInCart {
//     type: typeof CHANGE_VALUE_CHECKBOX,
//     index: number
// }

// type IAction

const initialState: IState = {
    users: []
};

const usersReducer = (state: IState = initialState, action: any) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        // case BUY_PRODUCT_IN_BASKET: {
        //     return {
        //         ...state, basket: [...state.basket.filter(p => !p.value)]
        //     }
        // }
        // case ADD_PRODUCT_IN_BASKET: {
        //     return {
        //         ...state, basket: [...state.basket, action.products]
        //     }
        // }
        // case DELETE_PRODUCTS_IN_BASKET: {
        //     debugger
        //     return {
        //         ...state, basket: [...state.basket.filter(p => !p.value)]
        //     }
        // }
        // case CHANGE_VALUE_CHECKBOX: {
        //     return {
        //         ...state, basket: state.basket.map((p, index) => {
        //             if (index === action.index) {
        //                 return { ...p, value: !p.value }
        //             } else {
        //                 return p
        //             }
        //         })
        //     }
        // }
        // default: return state
    }
};

export const setUsers = (users: IUsers): any => ({ type: SET_USERS, users })
// export const buyProductInBasket = (id: number | undefined): IAction => ({ type: BUY_PRODUCT_IN_BASKET, id })
// export const addProductInBasket = (products: IProducts): IAction => ({ type: ADD_PRODUCT_IN_BASKET, products })
// export const deleteProductInBasket = (): IAction => ({ type: DELETE_PRODUCTS_IN_BASKET })
// export const changeValueProductInCart = (index: number): IAction => ({ type: CHANGE_VALUE_CHECKBOX, index });


export default usersReducer;

export const getUsersTC = () => {
    debugger
    return async (dispatch: Dispatch) => {
        const response = await users.getUsers();
        if (response.data.users.length >= 1) {
            debugger
            dispatch(setUsers(response.data.users))
        }
    }
}

