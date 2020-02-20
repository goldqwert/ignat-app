import { shop } from "../../API/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../store";

const SET_PRODUCTS = "appIgnat/shop/SET_PRODUCTS"
const BUY_PRODUCT_IN_BASKET = "appIgnat/shop/BUY_PRODUCT_IN_BASKET"
const ADD_PRODUCT_IN_BASKET = "appIgnat/shop/ADD_PRODUCT_IN_BASKET"
const DELETE_PRODUCTS_IN_BASKET = "appIgnat/shop/DELETE_PRODUCTS_IN_BASKET"
const CHANGE_VALUE_CHECKBOX = "appIgnat/shop/CHANGE_VALUE_CHECKBOX"
interface IState {
    products: IProducts[]
    basket: IProducts[]
}
interface IProducts {
    id?: string
    productName: string
    price: number
    value?: boolean
}

export interface INewProduct {
    product: IProduct
}

export interface IProduct {
    id?: string,
    productName: string,
    price: number
}

interface IActionSetProducts {
    type: typeof SET_PRODUCTS
    products: IProduct
}

interface IActionAddProductsInBasket {
    type: typeof ADD_PRODUCT_IN_BASKET
    products: IProduct
}

interface IActionBuyProductsInBasket {
    type: typeof BUY_PRODUCT_IN_BASKET
    id: number | undefined
}

interface IDeleteProductsInBasket {
    type: typeof DELETE_PRODUCTS_IN_BASKET
}

interface IChangeValueProductInCart {
    type: typeof CHANGE_VALUE_CHECKBOX,
    index: number
}

type IAction = IActionSetProducts | IActionAddProductsInBasket | IActionBuyProductsInBasket | IDeleteProductsInBasket | IChangeValueProductInCart

const initialState: IState = {
    products: [],
    basket: []
};

const shopReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case BUY_PRODUCT_IN_BASKET: {
            return {
                ...state, basket: [...state.basket.filter(p => !p.value)]
            }
        }
        case ADD_PRODUCT_IN_BASKET: {
            return {
                ...state, basket: [...state.basket, action.products]
            }
        }
        case DELETE_PRODUCTS_IN_BASKET: {
            return {
                ...state, basket: [...state.basket.filter(p => !p.value)]
            }
        }
        case CHANGE_VALUE_CHECKBOX: {
            return {
                ...state, basket: state.basket.map((p, index) => {
                    if (index === action.index) {
                        return { ...p, value: !p.value }
                    } else {
                        return p
                    }
                })
            }
        }
        default: return state
    }
};

export const setProducts = (products: IProducts): IAction => ({ type: SET_PRODUCTS, products })
export const buyProductInBasket = (id: number | undefined): IAction => ({ type: BUY_PRODUCT_IN_BASKET, id })
export const addProductInBasket = (products: IProducts): IAction => ({ type: ADD_PRODUCT_IN_BASKET, products })
export const deleteProductInBasket = (): IAction => ({ type: DELETE_PRODUCTS_IN_BASKET })
export const changeValueProductInCart = (index: number): IAction => ({ type: CHANGE_VALUE_CHECKBOX, index });


export default shopReducer;

export const getProductsTC = () => {
    return async (dispatch: Dispatch) => {
        const response = await shop.getProducts();
        if (response.data.products.length >= 1) {
            dispatch(setProducts(response.data.products))
        }
    }
}

export const addProductTC = (newProduct: INewProduct) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.addNewProduct(newProduct);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}

export const updateProductTC = (updatedProduct: INewProduct) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.updateProduct(updatedProduct);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}

export const deleteProductTC = (id: string | undefined) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.deleteProduct(id);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}

export const buyProductTC = (id: number | undefined) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.buyProductAPI(String(id));
            await dispatch(buyProductInBasket(id));
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}