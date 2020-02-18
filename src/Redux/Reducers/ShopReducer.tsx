import { shop } from "../../API/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../store";

const SET_PRODUCTS = "appIgnat/shop/SET_PRODUCTS"
const BUY_PRODUCT_IN_BASKET = "appIgnat/shop/BUY_PRODUCT_IN_BASKET"

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

interface IAction {
    type: typeof SET_PRODUCTS | typeof BUY_PRODUCT_IN_BASKET
    products: IProducts[]
    basket: IProducts[]
}

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
                ...state, cart: [...state.basket.filter(p => !p.value)]
            }
        }
        default: return state
    }
};

export const setProducts = (products: IProducts) => ({ type: SET_PRODUCTS, products })
export const buyProductInBasket = (id: string | undefined) => ({ type: BUY_PRODUCT_IN_BASKET, id })

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

export const buyProductTC = (id: string | undefined) => {
    debugger
    return async (dispatch: Dispatch) => {
        try {
            await shop.buyProductAPI(id);
            await dispatch(buyProductInBasket(id));
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}